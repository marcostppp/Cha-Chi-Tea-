const bodyQuestions = [
  ['energy',
    ['The alarm goes off after a typical night. What does the first hour feel like?', ['I find my rhythm pretty quickly', 'Slow at first, then I’m fine', 'I often feel like I’m running on low battery', 'Most mornings it takes real effort to get going'], 'low energy first thing'],
    ['Le réveil sonne après une nuit habituelle. Comment se passe la première heure?', ['Je trouve mon rythme assez vite', 'Je démarre lentement, puis ça va', 'Je manque souvent d’énergie', 'La plupart du temps, démarrer me demande un vrai effort'], 'peu d’énergie au réveil']],
  ['tension',
    ['Your afternoon suddenly gets busy. Where do you feel it?', ['I can usually roll with it', 'My shoulders tighten once in a while', 'I often catch myself clenching my jaw or shoulders', 'My body tenses up almost every time'], 'physical tension during busy stretches'],
    ['Votre après-midi devient chargé d’un coup. Comment ça se manifeste?', ['En général, je m’adapte bien', 'Mes épaules se crispent de temps en temps', 'Je remarque souvent que je serre la mâchoire ou les épaules', 'Mon corps se crispe presque chaque fois'], 'de la tension physique quand ça se bouscule']],
  ['heavy',
    ['An hour after your usual lunch, what’s the scene?', ['I feel comfortable and ready to move on', 'A little sluggish once in a while', 'I often feel heavy enough to slow down', 'Most days I feel weighed down after lunch'], 'heaviness after a usual meal'],
    ['Une heure après votre dîner habituel, comment vous sentez-vous?', ['À l’aise et prêt à passer à la suite', 'Un peu au ralenti de temps en temps', 'Souvent assez lourd pour ralentir', 'La plupart du temps, j’ai une sensation de lourdeur'], 'une sensation de lourdeur après un repas habituel']],
  ['cold',
    ['Everyone else looks comfortable. What are you doing?', ['Usually comfortable too', 'Sometimes putting on a sweater', 'Often reaching for an extra layer', 'Regularly looking for the warmest spot in the room'], 'reaching for warmth indoors'],
    ['Votre entourage semble à l’aise. Et vous?', ['En général, je suis bien aussi', 'Je mets parfois un chandail', 'J’ajoute souvent une couche', 'Je cherche régulièrement le coin le plus chaud'], 'le besoin de vous réchauffer à l’intérieur']],
  ['dry',
    ['A long conversation or a busy afternoon. How does your mouth or throat feel?', ['Usually comfortable', 'Dry once in a while', 'Often dry enough that I notice', 'Dry most days, even outside those moments'], 'a dry mouth or throat'],
    ['Après une longue conversation ou un après-midi chargé, comment vont votre bouche et votre gorge?', ['En général, ça va bien', 'Un peu sèches de temps en temps', 'Souvent assez sèches pour que je le remarque', 'Sèches la plupart des jours, même en dehors de ces moments'], 'la bouche ou la gorge sèche']],
  ['heat',
    ['You walk into a room everyone else finds comfortable. What’s your move?', ['Nothing, it feels fine to me', 'I sometimes take off a layer', 'I often get warm and look for some air', 'I’m usually the first to want a cooler spot'], 'feeling warm sooner than others'],
    ['Vous entrez dans une pièce où tout le monde semble bien. Que faites-vous?', ['Rien, je suis bien aussi', 'J’enlève parfois une couche', 'J’ai souvent chaud et je cherche un peu d’air', 'Je cherche presque toujours un endroit plus frais en premier'], 'une sensation de chaleur plus rapide que les autres']],
  ['energy',
    ['After your usual errands, walk, or workday, how much is left in the tank?', ['Enough for whatever’s next', 'I need a short pause sometimes', 'I often need extra time to recharge', 'Most days I’m spent after ordinary activity'], 'needing extra recovery after everyday activity'],
    ['Après vos courses, votre marche ou votre journée de travail habituelle, combien d’énergie vous reste-t-il?', ['Assez pour ce qui vient ensuite', 'J’ai parfois besoin d’une petite pause', 'J’ai souvent besoin de plus de temps pour récupérer', 'La plupart du temps, une activité ordinaire m’épuise'], 'un besoin de récupérer après les activités courantes']],
  ['heavy',
    ['Think about the rest of the day. Does that weighed-down feeling follow you?', ['Rarely, if ever', 'Sometimes, mostly after a big meal', 'Often, even outside meals', 'Most days, including on quieter days'], 'a weighed-down feeling beyond mealtimes'],
    ['Pensez au reste de la journée. Est-ce que cette sensation de lourdeur vous suit?', ['Rarement, voire jamais', 'Parfois, surtout après un gros repas', 'Souvent, même en dehors des repas', 'La plupart du temps, même les journées tranquilles'], 'une sensation de lourdeur en dehors des repas']],
  ['heat',
    ['By mid-afternoon, how does your skin tend to feel in ordinary conditions?', ['Usually comfortable', 'A bit clammy or oily sometimes', 'Often clammy or oily', 'Clammy or oily on most days'], 'skin that often feels clammy or oily'],
    ['Vers le milieu de l’après-midi, comment est votre peau dans des conditions normales?', ['En général, rien de particulier', 'Parfois un peu moite ou grasse', 'Souvent moite ou grasse', 'Moite ou grasse la plupart des jours'], 'une peau souvent moite ou grasse']],
  ['tension',
    ['The day is done, and you finally have a quiet moment. What happens next?', ['I switch off fairly easily', 'Some days I replay things for a while', 'I often feel wired even when I’m tired', 'Most evenings I have trouble switching off'], 'difficulty switching off after a demanding day'],
    ['La journée est finie et vous avez enfin un moment tranquille. Qu’est-ce qui se passe?', ['Je décroche assez facilement', 'Certains jours, je repense à ce qui s’est passé', 'Je me sens souvent sur les nerfs même si je suis fatigué', 'J’ai du mal à décrocher la plupart des soirs'], 'de la difficulté à décrocher après une journée exigeante']],
  ['cold',
    ['How do your hands and feet usually feel when you’re sitting still indoors?', ['About right', 'Cool every now and then', 'Noticeably cold quite often', 'Cold on most days'], 'cold hands or feet at rest'],
    ['Comment se sentent vos mains et vos pieds quand vous êtes assis à l’intérieur?', ['À une température confortable', 'Frais de temps en temps', 'Assez froids régulièrement', 'Froids la plupart des jours'], 'les mains ou les pieds froids au repos']],
  ['dry',
    ['Near bedtime in a comfortable room, do you find yourself feeling warmer?', ['Rarely or never', 'Some evenings', 'Often enough that I notice', 'Most evenings'], 'a feeling of warmth toward bedtime'],
    ['À l’approche du coucher, avez-vous tendance à avoir chaud même si la pièce est confortable?', ['Rarement ou jamais', 'Certains soirs', 'Assez souvent pour le remarquer', 'La plupart des soirs'], 'une sensation de chaleur à l’approche du coucher']],
  ['flavour',
    ['Pick the first thing you’d reach for on a tasting table.', ['Toasted bread or malt', 'Dried fruit or a soft sweetness', 'Toasted nuts or grains', 'Something earthy and deep', 'Fresh greens or chestnut', 'Flowers or honey', 'Something soft and silky', 'Surprise me'], ''],
    ['Sur une table de dégustation, qu’est-ce qui vous attire en premier?', ['Du pain grillé ou du malt', 'Des fruits séchés ou une douceur légère', 'Des noix ou des grains grillés', 'Quelque chose de profond et terreux', 'Des notes végétales ou de châtaigne', 'Des fleurs ou du miel', 'Quelque chose de doux et soyeux', 'Surprenez-moi'], '']],
  ['caffeine',
    ['What happens when you have a caffeinated drink?', ['I usually feel fine', 'I can get jittery or sleep poorly', 'I avoid caffeine'], ''],
    ['Comment réagissez-vous aux boissons caféinées?', ['Ça se passe généralement bien', 'Je peux être nerveux ou mal dormir', 'J’évite la caféine'], '']]
];

const flavourPatterns = ['cold', 'dry', 'energy', 'heavy', 'heat', 'tension', 'balanced'];

const quizCopy = {
  en: {
    intro: 'A day in your shoes.', start: 'Start the quiz',
    framing: 'Picture an ordinary day over the past month, from the first alarm to the moment you finally wind down.',
    method: 'Explore six tendencies from traditional Chinese medicine through the rhythms of your everyday life, then discover a tea ritual to try.',
    note: 'Your rhythm can change with the season or your routine. Notice how the tea feels to you and revisit your answers as your habits change.',
    local: 'Your individual answers stay on this page.',
    clues: 'What tipped the match', fit: 'Why this tea fits your pattern', taste: 'What’s in the cup',
    picked: 'Your tasting pick', tasteMatch: 'That’s also part of this tea’s tasting profile.',
    tasteOther: 'This match gives you a different flavour to explore. It was chosen from your day-to-day patterns.',
    result: 'Your closest tea ritual', mixed: 'More than one pattern came through',
    mixedSummary: 'Your strongest patterns tied, so Stillpoint is a neutral tasting starting point. Your answers can fit more than one traditional pattern.',
    tradition: 'The TCM pairing', science: 'The science in the cup',
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
    intro: 'Une journée à votre façon.', start: 'Commencer le quiz',
    framing: 'Pensez à une journée ordinaire du dernier mois, du premier réveil au moment où vous décrochez enfin.',
    method: 'Explorez six tendances de la médecine traditionnelle chinoise à travers votre quotidien et découvrez un rituel de thé à essayer.',
    note: 'Votre rythme peut changer avec les saisons ou votre routine. Observez comment vous vous sentez avec ce thé et revenez au quiz quand vos habitudes changent.',
    local: 'Vos réponses individuelles restent sur cette page.',
    clues: 'Ce qui a fait pencher la balance', fit: 'Pourquoi ce thé correspond à votre tendance', taste: 'À quoi vous attendre en tasse',
    picked: 'Votre choix de saveur', tasteMatch: 'Cette note fait aussi partie du profil de ce thé.',
    tasteOther: 'Ce thé vous fait découvrir un autre profil de saveur. Il a été choisi selon vos habitudes au quotidien.',
    result: 'Votre rituel de thé', mixed: 'Plusieurs tendances ressortent',
    mixedSummary: 'Vos tendances les plus fortes sont à égalité. Stillpoint est un point de départ neutre pour la dégustation. Vos réponses peuvent correspondre à plusieurs tendances.',
    tradition: 'Le jumelage en MTC', science: 'La science dans la tasse',
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
  bodyQuestions.forEach(([pattern], index) => {
    if (pattern === 'flavour' || pattern === 'caffeine') return;
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
    quizPanel.innerHTML = `<h3 tabindex="-1">${copy.intro}</h3><p>${copy.framing}</p><p>${copy.method}</p><p class="notice">${copy.local}</p><button class="cta" type="button" data-quiz-action="start">${copy.start} →</button>`;
  } else if (quizStep < bodyQuestions.length) {
    const [question, choices] = bodyQuestions[quizStep][index];
    quizPanel.innerHTML = `
      <div class="progress" aria-hidden="true"><span style="width:${quizStep / bodyQuestions.length * 100}%"></span></div>
      <div class="meta">${t('question')} ${quizStep + 1} / ${bodyQuestions.length}</div>
      <h3 tabindex="-1">${question}</h3>
      <div class="choices">${choices.map((label, i) => `<button class="choice" type="button" data-quiz-answer="${i}">${label}</button>`).join('')}</div>
      <div class="quiz-nav"><button class="textbtn" type="button" data-quiz-action="back">${t('back')}</button></div>`;
  } else {
    const result = matchQuiz(quizAnswers);
    const profile = quizProfiles[result.key];
    const details = profile[lang];
    const caffeine = quizAnswers.at(-1);
    const caution = caffeine === 2 ? copy.avoid : caffeine === 1 ? copy.sensitive : '';
    const heading = result.mixed ? copy.mixed : details.title;
    const clues = bodyQuestions.flatMap(([pattern, en, fr], questionIndex) =>
      pattern === result.key && quizAnswers[questionIndex] > 0 ? [(lang === 'fr' ? fr : en)[2]] : []
    );
    const flavourIndex = quizAnswers.at(-2);
    const flavour = flavourPatterns[flavourIndex];
    quizPanel.innerHTML = `
      <div class="eyebrow">${copy.result}</div>
      <h3 tabindex="-1">${heading}</h3>
      ${result.mixed ? '' : `<div class="meta">${details.term}</div>`}
      <p>${result.mixed ? copy.mixedSummary : details.summary}</p>
      ${clues.length ? `<p class="quiz-clues"><b>${copy.clues}</b> · ${new Intl.ListFormat(lang).format(clues)}.</p>` : ''}
      <div class="quiz-match">
        <img src="/images/${profile.tea}-hero.webp" alt="" width="1536" height="1024">
        <div><strong>${profile.name}</strong>
        <p><b>${copy.fit}</b> · ${details.fit}</p>
        <p><b>${copy.taste}</b> · ${details.taste}</p>
        ${flavour ? `<p><b>${copy.picked}</b> · ${bodyQuestions.at(-2)[index][1][flavourIndex]}. ${flavour === result.key ? copy.tasteMatch : copy.tasteOther}</p>` : ''}</div>
      </div>
      <div class="quiz-reasons">
        <div><h4>${copy.tradition}</h4><p>${details.tradition}</p></div>
        <div><h4>${copy.science}</h4><p>${details.science}</p></div>
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
