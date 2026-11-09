const chaQiDescriptions = {"ember":["Deep & grounding","A slow, earthy presence—like warm stones after rain. Traditionally appreciated as a settling, unhurried cup.","Profond et ancré","Une présence lente et terreuse, comme des pierres chaudes après la pluie. Une tasse traditionnellement appréciée pour son caractère posé."],"mist":["Soft & restorative","Gentle, spacious and mellow, like mist lifting over quiet hills. A tea for slowing the pace and making room to breathe.","Doux et enveloppant","Une sensation douce et ample, comme la brume qui se lève sur les collines. Un thé pour ralentir et prendre le temps de respirer."],"stillpoint":["Clear & serene","An airy mountain feeling: lifted, graceful and quietly focused, like cool mist among high pines.","Clair et serein","Une impression aérienne de montagne : légère, élégante et paisible, comme la brume fraîche entre les pins."],"ground":["Warm & steady","A glowing hearth in a cup: rich, comforting and quietly energizing, with a reassuring sense of warmth.","Chaud et stable","Un foyer chaleureux dans la tasse : riche, réconfortant et doucement tonifiant."],"vital":["Bright & expansive","A fragrant breeze through an orchard: vivid, rising and expressive, with a lively, unfolding presence.","Vif et expansif","Une brise parfumée dans un verger : vive, ascendante et expressive, avec une présence qui se déploie."],"pivot":["Centered & gentle","A golden pause between movement and stillness: smooth, composed and quietly uplifting.","Centré et délicat","Une pause dorée entre le mouvement et le calme : douce, posée et subtilement vivifiante."],"jade":["Fresh & awakening","The first green light of spring: crisp, open and bright, like morning air above a mountain garden.","Frais et éveillant","La première lumière verte du printemps : vive et lumineuse, comme l’air du matin dans un jardin de montagne."]};
const bodyQuestions = [
  [
    "energy",
    [
      "How is your energy most days?",
      [
        "Good most of the day",
        "A little low in the morning",
        "I get tired pretty easily",
        "I'm tired most of the time"
      ],
      "your energy level"
    ],
    [
      "Comment est votre énergie en général?",
      [
        "Bonne presque toute la journée",
        "Un peu basse le matin",
        "Je me fatigue assez facilement",
        "Je suis fatigué la plupart du temps"
      ],
      "votre niveau d’énergie"
    ]
  ],
  [
    "tension",
    [
      "How do you handle stress?",
      [
        "I stay pretty relaxed",
        "I get tense sometimes",
        "I often feel stressed or tense",
        "It's hard for me to relax"
      ],
      "feeling tense or stressed"
    ],
    [
      "Comment réagissez-vous au stress?",
      [
        "Je reste assez détendu",
        "Je suis parfois tendu",
        "Je suis souvent stressé ou tendu",
        "J’ai du mal à me détendre"
      ],
      "le stress ou la tension"
    ]
  ],
  [
    "heavy",
    [
      "How do you usually feel after eating?",
      [
        "Comfortable",
        "A little full sometimes",
        "Often heavy or bloated",
        "Very heavy or sluggish"
      ],
      "feeling heavy after meals"
    ],
    [
      "Comment vous sentez-vous après un repas?",
      [
        "Bien",
        "Parfois un peu plein",
        "Souvent lourd ou ballonné",
        "Très lourd ou au ralenti"
      ],
      "la lourdeur après les repas"
    ]
  ],
  [
    "temperature",
    [
      "Do you usually feel hot or cold?",
      [
        "Almost always cold",
        "Often cold",
        "Sometimes cold",
        "Usually comfortable",
        "Sometimes hot",
        "Often hot",
        "Almost always hot"
      ],
      ""
    ],
    [
      "Avez-vous généralement chaud ou froid?",
      [
        "Presque toujours froid",
        "Souvent froid",
        "Parfois froid",
        "Généralement bien",
        "Parfois chaud",
        "Souvent chaud",
        "Presque toujours chaud"
      ],
      ""
    ]
  ],
  [
    "dry",
    [
      "Do your mouth or throat often feel dry?",
      [
        "Rarely",
        "Sometimes",
        "Often",
        "Almost every day"
      ],
      "dry mouth or throat"
    ],
    [
      "Avez-vous souvent la bouche ou la gorge sèche?",
      [
        "Rarement",
        "Parfois",
        "Souvent",
        "Presque tous les jours"
      ],
      "la bouche ou la gorge sèche"
    ]
  ],
  [
    "heat",
    [
      "Do you often feel too hot?",
      [
        "Rarely",
        "Sometimes, especially when active",
        "Often, even when relaxing",
        "Almost all the time"
      ],
      "feeling too hot"
    ],
    [
      "Avez-vous souvent trop chaud?",
      [
        "Rarement",
        "Parfois, surtout quand je bouge",
        "Souvent, même au repos",
        "Presque tout le temps"
      ],
      "une sensation fréquente de chaleur"
    ]
  ],
  [
    "energy",
    [
      "How do you feel after a normal day?",
      [
        "I still have energy",
        "I need a little rest",
        "I'm usually pretty tired",
        "I'm completely drained"
      ],
      "feeling tired after everyday activities"
    ],
    [
      "Comment vous sentez-vous après une journée normale?",
      [
        "J’ai encore de l’énergie",
        "J’ai besoin d’un peu de repos",
        "Je suis généralement assez fatigué",
        "Je suis complètement épuisé"
      ],
      "la fatigue après une journée normale"
    ]
  ],
  [
    "heavy",
    [
      "Do you often feel heavy or sluggish?",
      [
        "Rarely",
        "Sometimes after a big meal",
        "Often during the day",
        "Almost every day"
      ],
      "feeling heavy or sluggish"
    ],
    [
      "Vous sentez-vous souvent lourd ou au ralenti?",
      [
        "Rarement",
        "Parfois après un gros repas",
        "Souvent pendant la journée",
        "Presque tous les jours"
      ],
      "une sensation de lourdeur"
    ]
  ],
  [
    "heatSkin",
    [
      "How is your skin usually?",
      [
        "Mostly dry or tight",
        "A little dry",
        "Balanced / normal",
        "A little oily",
        "Mostly oily or shiny"
      ],
      ""
    ],
    [
      "Comment est votre peau en général?",
      [
        "Plutôt sèche ou qui tire",
        "Un peu sèche",
        "Équilibrée / normale",
        "Un peu grasse",
        "Plutôt grasse ou brillante"
      ],
      ""
    ]
  ],
  [
    "tension",
    [
      "Is it easy for you to unwind?",
      [
        "Yes, usually",
        "Sometimes I keep thinking about things",
        "I often feel restless",
        "I have a hard time relaxing"
      ],
      "trouble unwinding"
    ],
    [
      "Arrivez-vous facilement à décrocher?",
      [
        "Oui, en général",
        "Parfois, je pense encore à plein de choses",
        "Je me sens souvent agité",
        "J’ai beaucoup de mal à me détendre"
      ],
      "de la difficulté à décrocher"
    ]
  ],
  [
    "cold",
    [
      "How do your hands and feet usually feel?",
      [
        "Usually cold",
        "Sometimes cold",
        "Comfortable",
        "Sometimes hot",
        "Often hot or sweaty"
      ],
      ""
    ],
    [
      "Comment sont généralement vos mains et vos pieds?",
      [
        "Habituellement froids",
        "Parfois froids",
        "À une température confortable",
        "Parfois chauds",
        "Souvent chauds ou moites"
      ],
      ""
    ]
  ],
  [
    "dry",
    [
      "Do you tend to feel dry or sweaty?",
      [
        "Mostly dry skin or lips",
        "Sometimes dry",
        "Neither / balanced",
        "I sweat easily",
        "I'm often hot and sweaty"
      ],
      ""
    ],
    [
      "Avez-vous plutôt la peau sèche ou tendance à transpirer?",
      [
        "Surtout la peau ou les lèvres sèches",
        "Parfois un peu sec",
        "Ni l’un ni l’autre",
        "Je transpire facilement",
        "J’ai souvent chaud et je transpire"
      ],
      ""
    ]
  ],
  [
    "flavour",
    [
      "Which flavours sound good to you?",
      [
        "Bread, grains or something toasty",
        "Fresh fruit, like peach or pear",
        "Dried fruit or caramel",
        "Nuts, like chestnut or almond",
        "Earthy, like wood or mushrooms",
        "Fresh and green, like herbs",
        "Floral or honey-like",
        "Smooth and mild",
        "Surprise me"
      ],
      ""
    ],
    [
      "Quelles saveurs vous attirent?",
      [
        "Pain, céréales ou notes grillées",
        "Fruits frais, comme la pêche ou la poire",
        "Fruits séchés ou caramel",
        "Noix, comme la châtaigne ou l’amande",
        "Notes terreuses, comme le bois ou les champignons",
        "Notes fraîches et végétales, comme les herbes",
        "Notes florales ou de miel",
        "Doux et léger",
        "Surprenez-moi"
      ],
      ""
    ]
  ],
  [
    "caffeine",
    [
      "How does caffeine affect you?",
      [
        "It usually feels fine",
        "It can make me nervous or affect my sleep",
        "I avoid caffeine"
      ],
      ""
    ],
    [
      "Comment réagissez-vous à la caféine?",
      [
        "Je la tolère généralement bien",
        "Elle peut me rendre nerveux ou nuire à mon sommeil",
        "J’évite la caféine"
      ],
      ""
    ]
  ]
];

bodyQuestions.splice(12,0,...[["circulation",["Do you often notice the same spot feeling tense or uncomfortable?",["Rarely","Sometimes","Often","Very often"],"recurring discomfort in the same spot"],["Ressentez-vous souvent une tension ou un inconfort au même endroit?",["Rarement","Parfois","Souvent","Très souvent"],"un inconfort qui revient au même endroit"]],["sensitivity",["Are you sensitive to tea or other drinks?",["Not usually","Sometimes caffeine bothers me","I react to several drinks or ingredients","I have known allergies or strong reactions"],"sensitivities to drinks or ingredients"],["Êtes-vous sensible au thé ou à d’autres boissons?",["Pas habituellement","La caféine me dérange parfois","Je réagis à plusieurs boissons ou ingrédients","J’ai des allergies connues ou de fortes réactions"],"une sensibilité aux boissons ou ingrédients"]]]);

const temperatureScores = [-3, -2, -1, 0, 1, 2, 3];
const flavourPatterns = ['cold', 'dry', 'dry', 'energy', 'heavy', 'heat', 'tension', 'balanced', null];

const quizCopy = {
  en: {
    intro: 'Think of a typical day.', start: 'Start the quiz',
    framing: 'Answer based on how you’ve usually felt over the past month.',
    framework: 'Why seven tea profiles?', frameworkDetail: 'Traditional Chinese medicine describes nine constitutions. This short discovery quiz explores overlapping tendencies, then considers flavour and caffeine preferences to recommend one of our seven teas. It is not a clinical constitution assessment.',
    warmClue: 'often feeling warm indoors', coldClue: 'often feeling chilly indoors',
    dampNote: 'In TCM, daytime warmth with an oily or shiny face can also point toward a damp-heat tendency. Here it’s an extra clue about your warmth pattern.',
    note: 'Your rhythm can change with the season or your routine. Notice how the tea feels to you and revisit your answers as your habits change.',
    local: 'Your individual answers stay on this page.',
    clues: 'What tipped the match', fit: 'Why this tea fits your pattern', taste: 'What’s in the cup',
    picked: 'Your tasting pick', tasteMatch: 'That’s also part of this tea’s tasting profile.',
    tasteOther: 'This match gives you a different flavour to explore. It was chosen from your day-to-day patterns.',
    result: 'Your tea and constitution-inspired profile', mixed: 'More than one pattern came through',
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
    intro: 'Pensez à une journée ordinaire.', start: 'Commencer le quiz',
    framing: 'Répondez selon la façon dont vous vous êtes senti la plupart du temps au cours du dernier mois.',
    framework: 'Pourquoi sept profils de thé?', frameworkDetail: 'La médecine traditionnelle chinoise décrit neuf constitutions. Ce court quiz explore plusieurs tendances qui peuvent se chevaucher, puis tient compte des saveurs et de la caféine pour recommander un de nos sept thés. Ce n’est pas une évaluation clinique.',
    warmClue: 'une sensation fréquente de chaleur à l’intérieur', coldClue: 'une sensation fréquente de froid à l’intérieur',
    dampNote: 'En MTC, la chaleur en journée accompagnée d’un visage gras ou brillant peut aussi évoquer une tendance à l’humidité-chaleur. C’est ici un indice de plus pour nuancer votre profil.',
    note: 'Votre rythme peut changer avec les saisons ou votre routine. Observez comment vous vous sentez avec ce thé et revenez au quiz quand vos habitudes changent.',
    local: 'Vos réponses individuelles restent sur cette page.',
    clues: 'Ce qui a fait pencher la balance', fit: 'Pourquoi ce thé correspond à votre tendance', taste: 'À quoi vous attendre en tasse',
    picked: 'Votre choix de saveur', tasteMatch: 'Cette note fait aussi partie du profil de ce thé.',
    tasteOther: 'Ce thé vous fait découvrir un autre profil de saveur. Il a été choisi selon vos habitudes au quotidien.',
    result: 'Votre thé et votre profil inspiré des constitutions', mixed: 'Plusieurs tendances ressortent',
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
  // Tea discovery heuristics inspired by the nine-constitution framework.
  // These are independent tendencies, NOT CCMQ scores or clinical diagnoses.
  const a = i => Number.isInteger(answers[i]) ? answers[i] : 0;
  const max = (v, lo = 0) => Math.max(lo, v);
  const temp = temperatureScores[a(3)] ?? 0;
  const cold = max(-temp) + max(2-a(10)) + (a(0)>=2 ? 0.6 : 0);
  const warmth = max(temp) + a(5) + max(a(10)-2) + max(a(11)-2);
  const dryness = a(4) + max(2-a(8)) + max(2-a(11));
  const damp = a(2) + a(7);
  const oily = max(a(8)-2);
  const sweat = max(a(11)-2);
  const tension = a(1) + a(9);
  const energy = a(0) + a(6);
  const sensitivity = a(13);
  const scores = {
    balanced: 0,
    energy: energy * 0.85,
    cold: cold * 0.9 + energy * 0.15,
    dry: Math.min(dryness,warmth) * 1.1 + dryness * 0.35,
    heavy: damp * 0.85 + oily * 0.3,
    dampheat: Math.min(warmth,damp + oily + sweat) * 0.95 + oily * 0.65,
    tension: tension * 0.95,
    stasis: a(12) >= 2 ? a(12) * 0.65 : 0,
    sensitive: sensitivity >= 2 ? sensitivity * 1.8 : 0
  };
  // Avoid labelling blood stasis from one nonspecific question.
  // Sensitivity is a precaution flag, not a diagnosis.
  const ranked = Object.entries(scores).filter(([key,value]) => key !== 'balanced' && key !== 'stasis' && key !== 'sensitive' && value >= 3.2)
    .sort((x,y)=>y[1]-x[1]);
  const primary = ranked[0]?.[0] || 'balanced';
  const secondary = ranked[1] && ranked[1][1] >= 3.2 && ranked[1][1] >= ranked[0][1]*0.72 ? ranked[1][0] : null;
  const sensitivityFlag = sensitivity >= 2 || a(15) >= 1;
  // Keep constitution and tea recommendation separate.
  const baseTea = {balanced:'stillpoint',energy:'pivot',cold:'ground',dry:'mist',heavy:'ember',dampheat:'jade',tension:'vital'};
  const preferredFlavour = a(14);
  const flavourTea = ['ground','vital','mist','pivot','ember','jade','vital','stillpoint',null][preferredFlavour];
  const compatible = {
    balanced:['stillpoint','pivot','mist','vital','jade'],
    energy:['pivot','ground','stillpoint','mist'],
    cold:['ground','ember','pivot'],
    dry:['mist','stillpoint','pivot','jade'],
    heavy:['ember','ground','pivot'],
    dampheat:['jade','mist','stillpoint','pivot'],
    tension:['vital','stillpoint','mist','pivot']
  };
  const tea = flavourTea && compatible[primary].includes(flavourTea) ? flavourTea : baseTea[primary];
  return {key:primary, secondary, scores, tea, mixed:!!secondary, dampClue:oily>0 && warmth>2, sensitivityFlag, cautionFlag:a(15)===2};
}

function renderQuiz(focus = false) {
  const copy = quizCopy[lang];
  const index = lang === 'fr' ? 2 : 1;
  if (quizStep < 0) {
    quizPanel.innerHTML = `<h3 tabindex="-1">${copy.intro}</h3><p>${copy.framing}</p><details class="quiz-framework"><summary>${copy.framework}</summary><p>${copy.frameworkDetail}</p></details><p class="notice">${copy.local}</p><button class="cta" type="button" data-quiz-action="start">${copy.start} →</button>`;
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
    const selectedTea = result.tea;
    const details = profile[lang];
    const caffeine = quizAnswers.at(-1);
    const caution = caffeine === 2 ? copy.avoid : caffeine === 1 ? copy.sensitive : '';
    const heading = details.title;
    const secondaryDetails = result.secondary ? quizProfiles[result.secondary][lang] : null;
    const profileLabels = lang === 'fr' ? {balanced:'Équilibré',energy:'Énergie basse',cold:'Froid et lenteur',dry:'Chaleur et sécheresse',heavy:'Lourdeur et humidité',dampheat:'Chaleur et humidité',tension:'Tension et agitation'} : {balanced:'Balanced & Steady',energy:'Low Energy',cold:'Cold & Sluggish',dry:'Dry & Warm',heavy:'Heavy & Sluggish',dampheat:'Hot & Humid',tension:'Tense & Restless'};
    const teaNames = {ember:'2019 Shou Pu-erh',mist:'Aged Fuding Shou Mei White Tea',stillpoint:'Ali Shan Qing Xin Green Oolong',ground:'Fengqing Dianhong Black Tea',vital:'Mi Lan Xiang Dancong Oolong',pivot:'Mengding Huangya Yellow Tea',jade:'Shifeng Longjing Green Tea'};
    const teaType = teaNames[selectedTea] || profile.name;
    const qi = chaQiDescriptions[selectedTea];
    const qiTitle = lang === 'fr' ? qi[2] : qi[0];
    const qiText = lang === 'fr' ? qi[3] : qi[1];
    const clues = [];
    if (result.key === 'heat') clues.unshift(copy.warmClue);
    if (result.key === 'cold') clues.unshift(copy.coldClue);
    const flavourIndex = quizAnswers.at(-2);
    const flavour = flavourPatterns[flavourIndex];
    const chosen = Object.values(quizProfiles).find(p=>p.tea===selectedTea) || quizProfiles.balanced;
    const matchReason = selectedTea === profile.tea ? details.fit : (lang === 'fr' ? 'Votre profil a guidé la sélection, et vos goûts ont orienté le choix vers ce thé. Son caractère et ses arômes correspondent à vos préférences.' : 'Your body-pattern tendencies guided the shortlist, while your flavour preferences helped select this tea. Its character and aromas make it a personal tasting match.');
    quizPanel.innerHTML = `
      <div class="eyebrow">${copy.result}</div>
      <div class="quiz-result-heading"><div><span class="quiz-result-label">${lang === "fr" ? "VOTRE PROFIL INSPIRÉ DE LA MTC" : "YOUR TCM-INSPIRED BODY PATTERN"}</span><h3 tabindex="-1">${heading}</h3></div><div class="quiz-result-icon" aria-hidden="true">茶</div></div>
      <div class="meta">${details.term}</div>
      <p>${details.summary}</p>
      ${secondaryDetails ? `<p class="quiz-secondary"><b>${lang === 'fr' ? 'Votre tendance secondaire' : 'Your secondary tendency'}:</b> ${profileLabels[result.secondary]} · ${secondaryDetails.term}</p>` : ''}
      <div class="quiz-pattern-bars">${Object.entries(result.scores).filter(([key])=>!['stasis','sensitive','balanced'].includes(key)).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([key,value])=>`<div class="quiz-pattern-line"><span>${profileLabels[key]}</span><div class="quiz-pattern-track"><i style="width:${Math.round(Math.min(100,value/9*100))}%"></i></div></div>`).join('')}</div>
      <p class="notice">${lang === 'fr' ? 'Ces barres illustrent des tendances relatives dans ce quiz, pas des scores médicaux ni une mesure clinique.' : 'These bars compare tendencies within this quiz; they are not medical scores or a clinical measurement.'}</p>
      <div class="quiz-match">
        <div class="quiz-product-visual"><img src="/images/${selectedTea}-hero.webp" alt="${teaType}" width="1536" height="1024"><span class="quiz-photo-seal">CHA & CHI · ${lang === "fr" ? "THÉ DE MONTAGNE" : "MOUNTAIN TEA"}</span></div>
        <div><div class="quiz-tea-kicker">${lang === "fr" ? "VOTRE THÉ RECOMMANDÉ" : "YOUR RECOMMENDED TEA"}</div><strong>${chosen.name}</strong><h4 class="quiz-real-tea">${teaType}</h4>
        <p><b>${copy.fit}</b> · ${matchReason}</p>
        <p><b>${copy.taste}</b> · ${chosen[lang].taste}</p>
        <div class="quiz-photo-thumbs"><img src="/images/${selectedTea}-leaves.webp" alt="${lang === "fr" ? "Feuilles de thé" : "Tea leaves"}" loading="lazy"><span>${lang === "fr" ? "Vraies feuilles de notre collection · 50 g / 30 $ CA" : "Real leaves from our collection · 50 g / $30 CAD"}</span></div>
        ${flavour ? `<p><b>${copy.picked}</b> · ${bodyQuestions.at(-2)[index][1][flavourIndex]}. ${selectedTea === result.tea ? copy.tasteMatch : copy.tasteOther}</p>` : ''}</div>
      </div>
      <section class="cha-qi-panel"><div class="cha-qi-symbol" aria-hidden="true">氣</div><div><div class="cha-qi-eyebrow">${lang === "fr" ? "L’ESPRIT DU THÉ" : "THE SPIRIT OF THE TEA"}</div><h4>${lang === "fr" ? "Le cha qi — l’énergie du thé" : "Cha qi — the energy of tea"}</h4><strong>${qiTitle}</strong><p>${qiText}</p><small>${lang === "fr" ? "Le cha qi décrit l’expérience sensible et traditionnelle d’un thé : son caractère, son atmosphère et la façon dont on le ressent. Chaque personne peut le vivre différemment." : "Cha qi is a traditional way of describing a tea’s felt character, atmosphere and presence. The experience is personal and may differ from one person to another."}</small></div></section>
      <div class="quiz-reasons">
        <div><h4>${copy.tradition}</h4><p>${chosen[lang].tradition}</p>${result.key === 'heat' && result.dampClue ? `<p>${copy.dampNote}</p>` : ''}</div>
        <div><h4>${copy.science}</h4><p>${chosen[lang].science}</p></div>
      </div>
      ${result.sensitivityFlag ? `<p class="quiz-caution">${lang === 'fr' ? 'Vous avez signalé une sensibilité : vérifiez les ingrédients et évitez le thé en cas de réaction connue. Le quiz ne peut pas évaluer les allergies.' : 'You reported sensitivities: check ingredients and avoid tea if you have a known reaction. This quiz cannot assess allergies.'}</p>` : ''}
      ${caution ? `<p class="quiz-caution">${caution}</p>` : ''}
      <div class="quiz-actions">
        <a class="cta" href="/tea.html?tea=${selectedTea}">${lang === 'fr' ? 'Voir le thé' : 'View tea details'} · ${teaType} ↗</a>
        ${caffeine === 2 || quizAnswers[13] === 3 ? '' : `<button class="quiz-buy" type="button" data-add="${selectedTea}">${t('add')}</button>`}
      </div>
      <section class="tea-pairings-panel"><div class="quiz-tea-kicker">${lang === 'fr' ? 'À SAVOURER ENSEMBLE' : 'SOMETHING GOOD ON THE SIDE'}</div><h4>${lang === 'fr' ? 'Avec quoi déguster ce thé?' : 'What to eat with your tea'}</h4><p>${lang === 'fr' ? 'Quelques accords gourmands, simples à essayer à la maison.' : 'Easy, delicious pairings you can try at home.'}</p><div class="tea-pairings-grid">${teaPairings[profile.tea][lang].map(([food,why],i)=>`<div class="tea-pairing-card"><span aria-hidden="true">${['✦','❋','◈'][i]}</span><strong>${food}</strong><p>${why}</p></div>`).join('')}</div></section>
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
