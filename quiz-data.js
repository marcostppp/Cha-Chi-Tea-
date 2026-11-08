const quizProfiles = {
  cold: {
    tea: 'ground', name: 'Ground', en: {
      title: 'Runs cold', term: 'Yang-deficiency tendency',
      summary: 'Feeling cold when others are comfortable and seeking warmth were recurring themes in your answers. TCM uses yang to describe warming and active qualities.',
      tradition: 'Black tea is commonly described as warming in Chinese dietary tradition. Dianhong is a traditional-style choice for a warm morning cup.',
      science: 'Oxidation creates compounds that help give Dianhong its copper colour. A hot cup can feel warming as you drink it. Neither observation establishes that black tea changes a yang pattern.',
      food: 'If warm meals appeal to you, try an oat bowl with pear and walnuts, or a lentil, barley and vegetable soup. The warmth is a preference. The fibre and protein come from the ingredients.',
      routine: 'Take a brisk walk when you can and warm up in layers. Keep a consistent sleep and meal schedule. Bring persistent or newly noticeable cold intolerance to a clinician.',
      brew: 'Start with a small, lightly brewed cup earlier in the day. Keep plain water as your main drink.'
    }, fr: {
      title: 'Tendance à avoir froid', term: 'Tendance au vide de yang',
      summary: 'Vos réponses font ressortir une sensibilité au froid et une préférence pour la chaleur. En MTC, le yang évoque les qualités réchauffantes et actives.',
      tradition: 'Le thé noir est généralement décrit comme réchauffant dans la tradition alimentaire chinoise. Le Dianhong s’inscrit dans cette tradition comme tasse chaude du matin.',
      science: 'L’oxydation forme des composés qui contribuent à sa couleur cuivrée. Une tasse chaude peut procurer une sensation de chaleur en la buvant. Ces observations ne démontrent aucun changement du yang.',
      food: 'Si les repas chauds vous plaisent, essayez du gruau à la poire et aux noix ou une soupe d’orge, de lentilles et de légumes. La température est une préférence. Les fibres et les protéines viennent des ingrédients.',
      routine: 'Marchez d’un bon pas quand vous le pouvez et habillez-vous en couches. Gardez des heures de sommeil et de repas régulières. Parlez d’une sensibilité au froid nouvelle ou persistante à un professionnel.',
      brew: 'Commencez par une petite tasse peu infusée en début de journée. Gardez l’eau comme boisson principale.'
    }
  },
  dry: {
    tea: 'mist', name: 'Mist', en: {
      title: 'Dry and warm', term: 'Yin-deficiency tendency',
      summary: 'Dryness and feeling warm later in the day stood out. TCM uses yin to describe cooling, moistening and resting qualities.',
      tradition: 'White tea is often described as cool or mild. Views on aged white tea vary, so Shou Mei is a cultural pairing to explore rather than a prescribed remedy.',
      science: 'A study of Fuding white teas measured caffeine and other compounds in Shou Mei. The amounts changed with brewing temperature. The study did not test dryness, sleep or yin.',
      food: 'Keep water within reach and include water-rich foods you enjoy, such as pears, berries or a vegetable-and-bean soup. Regular meals matter more than any one ingredient.',
      routine: 'Try a consistent bedtime and a break from caffeinated tea later in the day. Seek advice for persistent dry mouth, unusual thirst or repeated night sweats.',
      brew: 'If you enjoy white tea, make it a small daytime cup. Mild flavour is an unreliable guide to caffeine.'
    }, fr: {
      title: 'Chaleur et sécheresse', term: 'Tendance au vide de yin',
      summary: 'La sécheresse et la sensation de chaleur en fin de journée ressortent. En MTC, le yin évoque la fraîcheur, l’humidité et le repos.',
      tradition: 'Le thé blanc est souvent décrit comme frais ou doux. Les avis varient pour les thés blancs vieillis. Le Shou Mei est ici une association culturelle à découvrir.',
      science: 'Une étude sur les thés blancs de Fuding a mesuré la caféine et d’autres composés du Shou Mei. Les quantités variaient selon la température d’infusion. L’étude ne portait ni sur la sécheresse ni sur le sommeil.',
      food: 'Gardez de l’eau à portée de main et choisissez des aliments riches en eau que vous aimez, comme les poires, les petits fruits ou une soupe aux légumes et aux haricots. La régularité des repas compte davantage qu’un ingrédient précis.',
      routine: 'Essayez de vous coucher à des heures régulières et de prendre votre thé caféiné plus tôt. Demandez conseil si la bouche sèche, une soif inhabituelle ou les sueurs nocturnes persistent.',
      brew: 'Si vous aimez le thé blanc, prenez-en une petite tasse de jour. Un goût doux renseigne peu sur la teneur en caféine.'
    }
  },
  energy: {
    tea: 'pivot', name: 'Pivot', en: {
      title: 'Low reserves', term: 'Qi-deficiency tendency',
      summary: 'You reported running out of energy easily and needing more recovery. In TCM, qi is a way of talking about how active and resilient you feel.',
      tradition: 'Our yellow tea is a mellow option for a pause. Some traditional accounts call yellow tea cool and others describe it as mild. This is a ritual pairing, with food and rest as separate priorities.',
      science: 'Covered yellowing changes leaf pigments and taste. Caffeine can briefly increase alertness, but it does not explain or resolve ongoing low energy.',
      food: 'Plan an easy meal or snack with fibre and protein, such as eggs or tofu with whole-grain toast and fruit, so tea does not become a substitute for food.',
      routine: 'Start with a short walk at a comfortable pace and make room for recovery. Get unexplained or persistent tiredness checked.',
      brew: 'Try a small cup with your usual daytime routine and notice your response. Pick water if caffeine is affecting your sleep.'
    }, fr: {
      title: 'Énergie en baisse', term: 'Tendance au vide de qi',
      summary: 'Vous dites manquer d’énergie rapidement et avoir besoin de récupérer. En MTC, le qi est une façon de parler de la vitalité et de la capacité à soutenir l’effort.',
      tradition: 'Notre thé jaune offre une tasse douce pour une pause. Certains textes le décrivent comme frais, d’autres comme modéré. L’association concerne le rituel. Les repas et le repos demeurent prioritaires.',
      science: 'Le jaunissement à couvert modifie les pigments et la saveur. La caféine peut augmenter brièvement la vigilance. Elle ne permet pas d’expliquer ou de résoudre une fatigue persistante.',
      food: 'Prévoyez un repas ou une collation facile avec des fibres et des protéines, par exemple des œufs ou du tofu, une rôtie de grains entiers et un fruit.',
      routine: 'Commencez par une courte marche à un rythme confortable et prenez le temps de récupérer. Faites évaluer une fatigue persistante ou inexpliquée.',
      brew: 'Essayez une petite tasse de jour et observez votre réaction. Préférez l’eau si la caféine nuit à votre sommeil.'
    }
  },
  heavy: {
    tea: 'ember', name: 'Ember', en: {
      title: 'Heaviness after meals', term: 'Dampness tendency',
      summary: 'A sense of heaviness and sluggishness after eating showed up together. Dampness is a traditional way to describe this cluster of sensations.',
      tradition: 'Ripe Pu-erh is traditionally described as gently warming and often served after a rich meal. That custom informs this pairing.',
      science: 'Microbes, moisture and heat transform the leaves during pile fermentation. Those changes explain aspects of its flavour. They do not establish a digestive or probiotic benefit from this cup.',
      food: 'Try a comfortably sized meal with vegetables, brown rice and tofu or fish. Eat at an unhurried pace and notice which portions or foods sit comfortably.',
      routine: 'If comfortable, take a short walk after a meal. Bring recurring or worsening digestive symptoms to a clinician.',
      brew: 'If you enjoy Pu-erh after food, start with a small cup earlier in the day. Leave room for water.'
    }, fr: {
      title: 'Lourdeur après les repas', term: 'Tendance à l’humidité',
      summary: 'La lourdeur et la baisse d’élan après les repas ressortent ensemble. L’humidité est un terme traditionnel qui regroupe ces sensations.',
      tradition: 'Le pu-erh mûr est traditionnellement décrit comme doucement réchauffant et souvent servi après un repas copieux. Cette coutume inspire l’association.',
      science: 'Les microorganismes, l’humidité et la chaleur transforment les feuilles durant la fermentation en tas. Cela explique certains aspects du goût. Un effet digestif ou probiotique pour cette tasse reste à démontrer.',
      food: 'Essayez une portion qui vous convient avec des légumes, du riz brun et du tofu ou du poisson. Mangez tranquillement et observez les aliments et les quantités que vous tolérez bien.',
      routine: 'Si vous êtes à l’aise, faites une courte marche après le repas. Consultez si vos symptômes digestifs reviennent souvent ou s’aggravent.',
      brew: 'Si vous aimez le pu-erh après manger, commencez par une petite tasse en début de journée. Pensez aussi à l’eau.'
    }
  },
  heat: {
    tea: 'jade', name: 'Jade', en: {
      title: 'Runs warm', term: 'Heat or damp-heat tendency',
      summary: 'Feeling warm easily alongside a tendency to feel clammy or oily stood out. Some TCM traditions describe that combination with the term damp-heat.',
      tradition: 'Green tea is traditionally considered cooling. In TCM that describes the tea’s character, even when it is brewed hot.',
      science: 'Pan-firing limits oxidation and helps preserve catechins such as EGCG. Their presence does not show that Longjing cools your body or changes a constitution.',
      food: 'Keep water handy and build a meal around foods you enjoy, such as cucumbers, cooked greens, barley and beans. Choose foods you tolerate, rather than banning whole food groups.',
      routine: 'Dress for the weather and adjust activity when it is hot. If heat intolerance or sweating is new or persistent, have it assessed.',
      brew: 'Try a light cup earlier in the day. Sip plain water for thirst.'
    }, fr: {
      title: 'Tendance à avoir chaud', term: 'Tendance à la chaleur ou à l’humidité-chaleur',
      summary: 'Vos réponses combinent une sensation de chaleur et une tendance à avoir la peau moite ou grasse. Certaines traditions de MTC parlent alors d’humidité-chaleur.',
      tradition: 'Le thé vert est traditionnellement considéré comme rafraîchissant. En MTC, le terme décrit son caractère, même si l’infusion est chaude.',
      science: 'La chauffe à la poêle limite l’oxydation et aide à préserver des catéchines comme l’EGCG. Leur présence ne démontre pas que le Longjing refroidit le corps ou change une constitution.',
      food: 'Gardez de l’eau sous la main et composez un repas avec des aliments que vous aimez, comme du concombre, des légumes verts cuits, de l’orge et des haricots. Choisissez ce que vous tolérez bien.',
      routine: 'Habillez-vous selon la météo et adaptez vos activités par temps chaud. Faites évaluer une intolérance à la chaleur ou une transpiration nouvelle ou persistante.',
      brew: 'Essayez une infusion légère en début de journée. Buvez de l’eau quand vous avez soif.'
    }
  },
  tension: {
    tea: 'vital', name: 'Vital', en: {
      title: 'Tension and stress', term: 'Qi-stagnation tendency',
      summary: 'Feeling wound up during stressful stretches and having trouble switching gears stood out. Some TCM writing calls this quality of constraint qi stagnation.',
      tradition: 'Oolong is often treated as neutral in Chinese dietary tradition. Dancong’s aroma makes it a natural choice for a short sensory pause.',
      science: 'Researchers have identified floral aroma compounds in Dancong. This explains part of its scent. It is not evidence that Dancong reduces anxiety, and caffeine can feel activating.',
      food: 'Make time for a regular meal, such as a bowl of vegetables, whole grains and chickpeas. Eat away from screens if that helps you slow down.',
      routine: 'Try a short walk or a quiet pause between tasks. If stress regularly interferes with sleep or daily life, consider professional support.',
      brew: 'Keep it small and early if caffeine makes tension worse. An unsweetened caffeine-free drink is a sensible substitute.'
    }, fr: {
      title: 'Tension et stress', term: 'Tendance à la stagnation du qi',
      summary: 'La tension durant les périodes de stress et la difficulté à décrocher ressortent. Certains textes de MTC parlent alors de stagnation du qi.',
      tradition: 'Dans la tradition alimentaire chinoise, l’oolong est souvent considéré comme neutre. Le parfum du Dancong se prête à une courte pause sensorielle.',
      science: 'Des chercheurs ont trouvé des composés aromatiques floraux dans le Dancong. Cela explique une partie de son parfum. Un effet sur l’anxiété n’est pas démontré, et la caféine peut être stimulante.',
      food: 'Prenez le temps de manger régulièrement, par exemple un bol de légumes, de grains entiers et de pois chiches. Éloignez les écrans si cela vous aide à ralentir.',
      routine: 'Essayez une courte marche ou une pause entre deux tâches. Si le stress nuit souvent au sommeil ou au quotidien, envisagez un accompagnement professionnel.',
      brew: 'Prenez une petite tasse tôt si la caféine accentue la tension. Une boisson sans caféine et non sucrée est une option.'
    }
  },
  balanced: {
    tea: 'stillpoint', name: 'Stillpoint', en: {
      title: 'Steady rhythm', term: 'Balanced tea ritual',
      summary: 'No single tendency dominated your answers. A balanced ritual is a useful starting point for exploring tea.',
      tradition: 'Lightly oxidized oolong sits between green and black tea in processing. Some Chinese dietary accounts place oolong in a neutral category.',
      science: 'Oolong contains caffeine and other tea compounds. Trials of caffeine and L-theanine report modest effects on some short-term attention tasks at studied doses. The dose and effects of a cup of Stillpoint were not studied.',
      food: 'Keep a variety of vegetables, fruit, whole grains and protein foods in your meals. Water is a good default throughout the day.',
      routine: 'Keep doing what works. Make time for regular sleep, everyday movement and breaks you enjoy.',
      brew: 'Try a small daytime cup and notice how the rolled leaves open with each steep.'
    }, fr: {
      title: 'Rythme stable', term: 'Rituel de thé équilibré',
      summary: 'Aucune tendance ne domine dans vos réponses. Un rituel équilibré est un bon point de départ pour découvrir le thé.',
      tradition: 'L’oolong légèrement oxydé se situe entre le thé vert et le thé noir par sa fabrication. Certains textes chinois le classent dans la catégorie neutre.',
      science: 'L’oolong contient de la caféine et d’autres composés. Des essais sur la caféine et la L-théanine observent des effets modestes sur certaines tâches d’attention à court terme aux doses étudiées. Une tasse de Stillpoint n’a pas été étudiée.',
      food: 'Variez les légumes, fruits, grains entiers et aliments protéinés. L’eau demeure une bonne boisson au fil de la journée.',
      routine: 'Gardez les habitudes qui vous conviennent. Réservez du temps pour un sommeil régulier, le mouvement et des pauses qui vous plaisent.',
      brew: 'Essayez une petite tasse de jour et observez comment les feuilles roulées s’ouvrent à chaque infusion.'
    }
  }
};

const quizSources = [
  ['Traditional constitution questionnaire research', 'Recherche sur les questionnaires de constitution', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10164641/'],
  ['Tea categories in Chinese dietary tradition', 'Familles de thé dans la tradition alimentaire chinoise', 'https://health.people.com.cn/n1/2021/0315/c14739-32051473.html'],
  ['Tea processing and chemistry', 'Transformation et chimie du thé', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8605308/'],
  ['Fuding white tea infusion study', 'Étude sur l’infusion du thé blanc de Fuding', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6170294/'],
  ['Dancong aroma study', 'Étude sur les arômes du Dancong', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7751878/'],
  ['Caffeine and theanine trials', 'Essais sur la caféine et la théanine', 'https://pubmed.ncbi.nlm.nih.gov/40314930/'],
  ['Health Canada on caffeine', 'Santé Canada sur la caféine', 'https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods.html'],
  ['Canada’s Food Guide', 'Guide alimentaire canadien', 'https://www.canada.ca/en/health-canada/services/food-guide/explore/healthy-eating-recommendations.html'],
  ['Canada’s guidance on activity and nutrition', 'Conseils canadiens sur l’activité et l’alimentation', 'https://www.canada.ca/en/health-canada/services/food-guide/eating-support/physical-activity-lifestyle/healthy-eating.html']
];

if (typeof module !== 'undefined') module.exports = { quizProfiles, quizSources };
