const bodyQuestions = [
  ['cold', 'I feel chilly when others around me seem comfortable.', 'J’ai froid quand les autres autour de moi semblent à l’aise.'],
  ['dry', 'My mouth or throat often feels dry during an ordinary day.', 'J’ai souvent la bouche ou la gorge sèche dans une journée ordinaire.'],
  ['energy', 'My energy drops during everyday activities.', 'Mon énergie baisse pendant mes activités habituelles.'],
  ['heavy', 'I feel heavy or sluggish after a normal-sized meal.', 'Je me sens lourd ou au ralenti après un repas de taille habituelle.'],
  ['heat', 'I feel warm easily in ordinary indoor temperatures.', 'J’ai facilement chaud à une température intérieure ordinaire.'],
  ['tension', 'I notice physical tension during busy or stressful stretches.', 'Je ressens de la tension physique durant les périodes chargées ou stressantes.'],
  ['cold', 'I reach for extra layers or warmth more often than the people around me.', 'J’ai besoin de me couvrir ou de me réchauffer plus souvent que mon entourage.'],
  ['dry', 'I tend to feel warm toward evening even when the room is comfortable.', 'J’ai tendance à avoir chaud en soirée, même quand la pièce est confortable.'],
  ['energy', 'I need more time to recover after my usual level of activity.', 'J’ai besoin de plus de temps pour récupérer après mes activités habituelles.'],
  ['heavy', 'My body feels weighed down even after a usual night of sleep.', 'Je me sens lourd même après une nuit de sommeil habituelle.'],
  ['heat', 'My skin often feels clammy or oily in ordinary conditions.', 'J’ai souvent la peau moite ou grasse dans des conditions ordinaires.'],
  ['tension', 'I find it hard to wind down after a demanding day.', 'J’ai du mal à décrocher après une journée exigeante.'],
  ['caffeine', 'How does caffeine usually feel for you?', 'Comment réagissez-vous habituellement à la caféine?']
];

const quizCopy = {
  en: {
    intro: 'Think about your usual days over the past month.', start: 'Start the 2-minute quiz',
    method: 'Inspired by six TCM tendencies. This short quiz is for education and tea discovery. It covers part of the traditional framework and has no clinical validation.',
    note: 'Patterns can overlap and change. Your result is an educational reflection. Discuss new or persistent symptoms with a health professional.',
    local: 'Your individual answers stay on this page.',
    frequency: ['Rarely or never', 'Sometimes', 'Often', 'Most days'],
    caffeine: ['Usually fine', 'Sometimes jittery or affects my sleep', 'I avoid caffeine'],
    result: 'Your closest tea ritual', mixed: 'More than one pattern came through',
    mixedSummary: 'Your strongest patterns tied, so Stillpoint is a neutral tasting starting point. Your answers can fit more than one traditional pattern.',
    tradition: 'Traditional perspective', science: 'What the research can tell us',
    choice: 'Explore', full: 'Read your full report', food: 'Food to try', routine: 'Everyday habits',
    brew: 'How to try your tea', sources: 'Research and sources',
    sensitive: 'Try less caffeine, or skip it if it makes you feel jittery or affects sleep.',
    avoid: 'All seven teas contain caffeine. Since you avoid it, use this tea match as a cultural reference and choose water or a caffeine-free drink for your ritual.',
    send: 'Email my report', offer: 'Email my report + 15% off my first order',
    email: 'Email address', consent: 'I agree to share my email and matched profile with Cha & Chi and its email provider to receive this one requested message.',
    offerConsent: 'I agree to share my email and matched profile with Cha & Chi and its email provider to receive this one message with my report and offer.',
    delivered: 'Your report was sent. Check your inbox.', failed: 'Email delivery is unavailable right now. Your full report is above.',
    sending: 'Sending…'
  },
  fr: {
    intro: 'Pensez à vos journées habituelles au cours du dernier mois.', start: 'Commencer le quiz de 2 minutes',
    method: 'Inspiré de six tendances en MTC. Ce court quiz sert à découvrir le thé et à mieux comprendre cette tradition. Il couvre une partie du cadre traditionnel et n’a pas été validé cliniquement.',
    note: 'Les tendances peuvent se chevaucher et évoluer. Ce résultat sert à la réflexion. Parlez de symptômes nouveaux ou persistants à un professionnel de la santé.',
    local: 'Vos réponses individuelles restent sur cette page.',
    frequency: ['Rarement ou jamais', 'Parfois', 'Souvent', 'Presque tous les jours'],
    caffeine: ['Généralement bien', 'Parfois nerveux ou sommeil perturbé', 'J’évite la caféine'],
    result: 'Votre rituel de thé', mixed: 'Plusieurs tendances ressortent',
    mixedSummary: 'Vos tendances les plus fortes sont à égalité. Stillpoint est un point de départ neutre pour la dégustation. Vos réponses peuvent correspondre à plusieurs tendances.',
    tradition: 'Perspective traditionnelle', science: 'Ce que la recherche nous apprend',
    choice: 'Découvrir', full: 'Lire votre rapport complet', food: 'Idées pour vos repas', routine: 'Habitudes au quotidien',
    brew: 'Comment découvrir votre thé', sources: 'Recherche et sources',
    sensitive: 'Réduisez la caféine ou évitez-la si elle vous rend nerveux ou nuit à votre sommeil.',
    avoid: 'Les sept thés contiennent de la caféine. Puisque vous l’évitez, gardez ce jumelage comme repère culturel et choisissez de l’eau ou une boisson sans caféine.',
    send: 'Recevoir mon rapport par courriel', offer: 'Recevoir mon rapport et 15 % sur ma première commande',
    email: 'Adresse courriel', consent: 'J’accepte de partager mon courriel et mon profil associé avec Cha & Chi et son fournisseur de courriel pour recevoir ce seul message demandé.',
    offerConsent: 'J’accepte de partager mon courriel et mon profil associé avec Cha & Chi et son fournisseur de courriel pour recevoir ce seul message avec mon rapport et mon offre.',
    delivered: 'Votre rapport a été envoyé. Vérifiez votre boîte de réception.', failed: 'L’envoi par courriel est indisponible. Votre rapport complet se trouve ci-dessus.',
    sending: 'Envoi en cours…'
  }
};

const quizPanel = document.getElementById('quizPanel');
let quizStep = -1;
let quizAnswers = [];
let reportStatus = null;

function matchQuiz(answers) {
  const patterns = new Map();
  bodyQuestions.slice(0, -1).forEach(([pattern], index) => {
    const scores = patterns.get(pattern) || [];
    scores.push(answers[index]);
    patterns.set(pattern, scores);
  });
  const candidates = [...patterns].filter(([, [a, b]]) => a > 0 && b > 0 && a + b >= 4)
    .map(([pattern, [a, b]]) => ({ pattern, score: a + b }))
    .sort((a, b) => b.score - a.score);
  const mixed = candidates.length > 1 && candidates[0].score === candidates[1].score;
  return { key: !mixed && candidates.length ? candidates[0].pattern : 'balanced', mixed };
}

function renderQuiz(focus = false) {
  const copy = quizCopy[lang];
  const index = lang === 'fr' ? 2 : 1;
  if (quizStep < 0) {
    quizPanel.innerHTML = `<h3 tabindex="-1">${copy.intro}</h3><p>${copy.method}</p><p class="notice">${copy.local}</p><button class="cta" type="button" data-quiz-action="start">${copy.start} →</button>`;
  } else if (quizStep < bodyQuestions.length) {
    const question = bodyQuestions[quizStep];
    const choices = question[0] === 'caffeine' ? copy.caffeine : copy.frequency;
    quizPanel.innerHTML = `
      <div class="progress" aria-hidden="true"><span style="width:${quizStep / bodyQuestions.length * 100}%"></span></div>
      <div class="meta">${t('question')} ${quizStep + 1} / ${bodyQuestions.length}</div>
      <h3 tabindex="-1">${question[index]}</h3>
      <div class="choices">${choices.map((label, i) => `<button class="choice" type="button" data-quiz-answer="${i}">${label}</button>`).join('')}</div>
      <div class="quiz-nav"><button class="textbtn" type="button" data-quiz-action="back">${t('back')}</button></div>`;
  } else {
    const result = matchQuiz(quizAnswers);
    const profile = quizProfiles[result.key];
    const details = profile[lang];
    const caffeine = quizAnswers.at(-1);
    const caution = caffeine === 2 ? copy.avoid : caffeine === 1 ? copy.sensitive : '';
    const heading = result.mixed ? copy.mixed : details.title;
    quizPanel.innerHTML = `
      <div class="eyebrow">${copy.result}</div>
      <h3 tabindex="-1">${heading}</h3>
      ${result.mixed ? '' : `<div class="meta">${details.term}</div>`}
      <p>${result.mixed ? copy.mixedSummary : details.summary}</p>
      <div class="quiz-match">
        <img src="/images/${profile.tea}-hero.webp" alt="" width="1536" height="1024">
        <div><strong>${profile.name}</strong><p><b>${copy.tradition}</b> · ${details.tradition}</p>
        <p><b>${copy.science}</b> · ${details.science}</p></div>
      </div>
      ${caution ? `<p class="quiz-caution">${caution}</p>` : ''}
      <div class="quiz-actions">
        <a class="cta" href="/tea.html?tea=${profile.tea}">${copy.choice} ${profile.name} ↗</a>
        ${caffeine === 2 ? '' : `<button class="quiz-buy" type="button" data-add="${profile.tea}">${t('add')}</button>`}
      </div>
      <details class="quiz-report">
        <summary>${copy.full}</summary>
        <p><b>${copy.food}</b> · ${details.food}</p>
        <p><b>${copy.routine}</b> · ${details.routine}</p>
        <p><b>${copy.brew}</b> · ${caution || details.brew}</p>
        <p><b>${copy.sources}</b></p>
        <ul>${quizSources.map(source => `<li><a href="${source[2]}">${source[index - 1]}</a></li>`).join('')}</ul>
      </details>
      <p class="notice">${copy.note}</p>
      <div data-report-slot></div>
      <div class="quiz-nav"><button class="textbtn" type="button" data-quiz-action="restart">${t('restart')}</button></div>`;
    renderReportForm(result);
  }
  if (focus) quizPanel.querySelector('h3').focus({ preventScroll: true });
}

function renderReportForm(result) {
  const slot = quizPanel.querySelector('[data-report-slot]');
  if (!slot || !reportStatus?.email) return;
  const copy = quizCopy[lang];
  const offer = reportStatus.offer && quizAnswers.at(-1) !== 2;
  slot.innerHTML = `
    <form class="quiz-email" data-profile="${result.key}" data-mixed="${result.mixed}" data-offer="${offer}">
      <label for="quiz-email">${copy.email}</label>
      <input id="quiz-email" name="email" type="email" maxlength="254" autocomplete="email" required>
      <label class="quiz-consent"><input name="consent" type="checkbox" required> ${offer ? copy.offerConsent : copy.consent}</label>
      <button type="submit" class="cta">${offer ? copy.offer : copy.send}</button>
      <p role="status"></p>
    </form>`;
}

quizPanel.addEventListener('click', event => {
  const answer = event.target.closest('[data-quiz-answer]');
  const action = event.target.closest('[data-quiz-action]')?.dataset.quizAction;
  if (answer) {
    quizAnswers[quizStep++] = Number(answer.dataset.quizAnswer);
  } else if (action === 'start' || action === 'restart') {
    quizAnswers = [];
    quizStep = 0;
  } else if (action === 'back') {
    quizStep--;
  } else {
    return;
  }
  renderQuiz(true);
  if (quizPanel.getBoundingClientRect().top < 80 || quizStep >= bodyQuestions.length) {
    quizPanel.scrollIntoView({ block: 'start' });
  }
});

quizPanel.addEventListener('submit', async event => {
  const form = event.target;
  if (!form.matches('.quiz-email')) return;
  event.preventDefault();
  const copy = quizCopy[lang];
  const status = form.querySelector('[role="status"]');
  const button = form.querySelector('button[type="submit"]');
  const data = new FormData(form);
  button.disabled = true;
  status.textContent = copy.sending;
  try {
    const response = await fetch('/api/quiz-report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.get('email'), consent: data.get('consent') === 'on', profile: form.dataset.profile, mixed: form.dataset.mixed === 'true', offer: form.dataset.offer === 'true', lang })
    });
    if (!response.ok) throw new Error('Report delivery unavailable');
    status.textContent = copy.delivered;
  } catch {
    status.textContent = copy.failed;
    button.disabled = false;
  }
});

fetch('/api/quiz-report').then(async response => {
  if (response.ok) {
    reportStatus = await response.json();
    if (quizStep >= bodyQuestions.length) renderReportForm(matchQuiz(quizAnswers));
  }
}).catch(() => {});
