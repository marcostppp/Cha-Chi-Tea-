import { createHmac } from 'node:crypto';
import data from '../../quiz-data.js';

const { quizProfiles, quizSources } = data;
export const config = {
  path: '/api/quiz-report',
  rateLimit: { windowLimit: 12, windowSize: 60, aggregateBy: ['ip'] }
};

const json = (body, status = 200) => Response.json(body, {
  status, headers: { 'Cache-Control': 'no-store' }
});

export default async function quizReport(request) {
  const { RESEND_API_KEY, QUIZ_FROM_EMAIL, QUIZ_FIRST_ORDER_CODE, ENABLE_CHECKOUT, STRIPE_SECRET_KEY, URL: siteUrl } = process.env;
  const emailEnabled = Boolean(RESEND_API_KEY && QUIZ_FROM_EMAIL && /^https:\/\/[a-z0-9.-]+\/?$/i.test(siteUrl || ''));
  const offerEnabled = Boolean(emailEnabled && ENABLE_CHECKOUT === 'true' && STRIPE_SECRET_KEY && QUIZ_FIRST_ORDER_CODE);
  if (request.method === 'GET') return json({ email: emailEnabled, offer: offerEnabled });
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  if (!emailEnabled) return json({ error: 'Email delivery unavailable' }, 503);
  if (request.headers.get('Origin') !== new URL(request.url).origin) return json({ error: 'Invalid origin' }, 403);

  let input;
  try {
    const body = await request.text();
    if (body.length > 1024) return json({ error: 'Request too large' }, 413);
    input = JSON.parse(body);
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }
  const email = typeof input?.email === 'string' ? input.email.trim().toLowerCase() : '';
  if (email.length > 254 || !/^[^\s@,<>]+@[^\s@,<>]+\.[^\s@,<>]+$/.test(email) ||
      input.consent !== true || typeof input.profile !== 'string' || !Object.hasOwn(quizProfiles, input.profile) ||
      !['en', 'fr'].includes(input.lang) || (input.mixed === true && input.profile !== 'balanced')) {
    return json({ error: 'Invalid request' }, 400);
  }
  if (input.offer === true && !offerEnabled) return json({ error: 'Offer unavailable' }, 503);

  const profile = quizProfiles[input.profile];
  const details = profile[input.lang];
  const fr = input.lang === 'fr';
  const isMixed = input.mixed === true;
  const title = isMixed ? (fr ? 'Plusieurs tendances ressortent' : 'More than one pattern came through') : details.title;
  const summary = isMixed
    ? (fr ? 'Vos tendances les plus fortes sont à égalité. Stillpoint est un point de départ neutre pour la dégustation.' : 'Your strongest patterns tied. Stillpoint is a neutral tasting starting point.')
    : details.summary;
  const productUrl = new URL('/tea.html?tea=' + profile.tea, siteUrl).href;
  const offer = input.offer === true
    ? (fr ? 'Votre offre de 15 % sur la première commande admissible. Code à entrer au paiement — ' : 'Your 15% offer on an eligible first order. Enter this code at checkout — ') + QUIZ_FIRST_ORDER_CODE
    : '';
  const sections = [
    title,
    ...(isMixed ? [] : [details.term]),
    summary,
    fr ? 'Votre thé — ' + profile.name : 'Your tea — ' + profile.name,
    productUrl,
    (fr ? 'Pourquoi ce thé correspond à votre tendance' : 'Why this tea fits your pattern') + '\n' + details.fit,
    (fr ? 'À quoi vous attendre en tasse' : 'What to expect in the cup') + '\n' + details.taste,
    (fr ? 'Perspective traditionnelle' : 'Traditional perspective') + '\n' + details.tradition,
    (fr ? 'Ce que la recherche nous apprend' : 'What the research can tell us') + '\n' + details.science,
    (fr ? 'Idées pour vos repas' : 'Food to try') + '\n' + details.food,
    (fr ? 'Habitudes au quotidien' : 'Everyday habits') + '\n' + details.routine,
    (fr ? 'Comment découvrir votre thé' : 'How to try your tea') + '\n' + details.brew,
    fr ? 'Ces thés contiennent de la caféine. Si vous l’évitez, choisissez plutôt de l’eau ou une boisson sans caféine.' : 'These teas contain caffeine. If you avoid caffeine, choose water or a caffeine-free drink.',
    fr ? 'Ce quiz sert à la découverte et à la réflexion. Consultez un professionnel pour des symptômes nouveaux ou persistants.' : 'This quiz is for discovery and reflection. Seek professional advice for new or persistent symptoms.',
    offer,
    'Sources' + '\n' + quizSources.map(source => source[fr ? 1 : 0] + ' — ' + source[2]).join('\n'),
    fr ? 'Cha & Chi · Montréal, Canada. Vous recevez le message unique que vous avez demandé.' : 'Cha & Chi · Montréal, Canada. This is the one-time message you requested.'
  ];
  const payload = JSON.stringify({
    from: QUIZ_FROM_EMAIL, to: [email],
    subject: fr ? 'Votre rapport Cha & Chi' : 'Your Cha & Chi tea report',
    text: sections.filter(Boolean).join('\n\n')
  });
  const key = createHmac('sha256', RESEND_API_KEY).update(payload).digest('hex');
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST', signal: AbortSignal.timeout(8000),
      headers: { Authorization: 'Bearer ' + RESEND_API_KEY, 'Content-Type': 'application/json', 'Idempotency-Key': 'quiz/' + key },
      body: payload
    });
    if (response.ok) return json({ sent: true });
  } catch {
    // The visitor can still access the report on the website.
  }
  return json({ error: 'Email delivery unavailable' }, 502);
}
