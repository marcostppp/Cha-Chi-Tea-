const quizProfiles = {
  cold: {
    tea: 'ground', name: 'Ground', en: {
      title: 'Runs cold', term: 'Yang-deficiency tendency',
      summary: 'Feeling chilly indoors and getting cold hands or feet at rest came through in your answers. TCM uses yang to describe warming and active qualities.',
      fit: "When you’re the one reaching for a sweater and your hands or feet cool down at rest, a warm cup is a good fit for what you already seek out. We chose Dianhong because black tea sits on the warming side of traditional tea classifications. Try it with breakfast or on a chilly afternoon, early enough that the caffeine suits you.",
      taste: "Full-bodied and malty, with a baked sweetness reminiscent of toasted bread.",
      tradition: 'Black tea is commonly described as warming in Chinese dietary tradition. Dianhong is a traditional-style choice for a warm morning cup.',
      science: "During black tea making, oxidation creates compounds called theaflavins and thearubigins. They help give Dianhong its copper colour and brisk taste. Try it warm with breakfast and see which notes come through as the cup cools.",
      food: 'If warm meals appeal to you, try an oat bowl with pear and walnuts, or a lentil, barley and vegetable soup. The warmth is a preference. The fibre and protein come from the ingredients.',
      routine: 'Take a brisk walk when you can and warm up in layers. Keep a consistent sleep and meal schedule. Bring persistent or newly noticeable cold intolerance to a clinician.',
      brew: 'Start with a small, lightly brewed cup earlier in the day. Keep plain water as your main drink.'
    }, fr: {
      title: 'Tendance à avoir froid', term: 'Tendance au vide de yang',
      summary: 'Vos réponses font ressortir le froid à l’intérieur et les mains ou les pieds froids au repos. En MTC, le yang évoque les qualités réchauffantes et actives.',
      fit: "Si vous êtes la personne qui cherche un chandail et qui a les mains ou les pieds froids au repos, une tasse chaude rejoint ce que vous recherchez déjà. On a choisi le Dianhong parce que le thé noir se situe du côté réchauffant dans les classifications traditionnelles. Essayez-le au déjeuner ou en début d’après-midi si vous tolérez la caféine.",
      taste: "Une tasse ample et maltée, avec une douceur qui rappelle le pain grillé.",
      tradition: 'Le thé noir est généralement décrit comme réchauffant dans la tradition alimentaire chinoise. Le Dianhong s’inscrit dans cette tradition comme tasse chaude du matin.',
      science: "Pendant la fabrication du thé noir, l’oxydation forme des théaflavines et des théarubigines. Ces composés contribuent à la couleur cuivrée et au goût vif du Dianhong. Essayez-le chaud au déjeuner et remarquez les notes qui ressortent quand la tasse refroidit.",
      food: 'Si les repas chauds vous plaisent, essayez du gruau à la poire et aux noix ou une soupe d’orge, de lentilles et de légumes. La température est une préférence. Les fibres et les protéines viennent des ingrédients.',
      routine: 'Marchez d’un bon pas quand vous le pouvez et habillez-vous en couches. Gardez des heures de sommeil et de repas régulières. Parlez d’une sensibilité au froid nouvelle ou persistante à un professionnel.',
      brew: 'Commencez par une petite tasse peu infusée en début de journée. Gardez l’eau comme boisson principale.'
    }
  },
  dry: {
    tea: 'mist', name: 'Mist', en: {
      title: 'Dry and warm', term: 'Yin-deficiency tendency',
      summary: 'A dry mouth or throat and unusually warm palms or soles in the evening stood out. TCM uses yin to describe cooling, moistening and resting qualities.',
      fit: "Your combination of a dry mouth or throat and warm palms or soles in the evening points toward the dry-and-warm pattern in this quiz. Mist gives you a soft cup with the traditionally milder character associated with white tea. Enjoy it earlier in the day, and reach for water when you’re thirsty or when the dryness is the main thing you notice.",
      taste: "Soft and rounded, with dried fruit and a little sweetness from the aged leaf.",
      tradition: 'White tea is often described as cool or mild in Chinese dietary tradition. Mist brings that gentle character into a daytime tea ritual. Let the infusion cool to a comfortable temperature and take your time with it.',
      science: "Researchers brewing Fuding Shou Mei found that water temperature changed how much caffeine, theanine and catechins went into the cup. Start at the gentler end of the brewing guide and taste how the leaves open over a few short infusions.",
      food: 'Keep water within reach and include water-rich foods you enjoy, such as pears, berries or a vegetable-and-bean soup. Regular meals matter more than any one ingredient.',
      routine: 'Try a consistent bedtime and a break from caffeinated tea later in the day. Seek advice for persistent dry mouth, unusual thirst or repeated night sweats.',
      brew: 'If you enjoy white tea, make it a small daytime cup. Mild flavour is an unreliable guide to caffeine.'
    }, fr: {
      title: 'Chaleur et sécheresse', term: 'Tendance au vide de yin',
      summary: 'La bouche ou la gorge sèche et la chaleur aux paumes ou à la plante des pieds en soirée ressortent. En MTC, le yin évoque la fraîcheur, l’humidité et le repos.',
      fit: "La bouche ou la gorge sèche, combinée à la chaleur aux paumes ou à la plante des pieds en soirée, évoque la tendance chaleur et sécheresse dans ce quiz. Mist donne une tasse douce qui s’inscrit dans le caractère plus doux associé au thé blanc en tradition chinoise. Prenez-le de jour et pensez à l’eau quand vous avez soif ou que la sécheresse se fait surtout sentir.",
      taste: "Une tasse douce et ronde, avec des notes de fruits séchés et la douceur des feuilles vieillies.",
      tradition: 'Le thé blanc est souvent décrit comme frais ou doux dans la tradition alimentaire chinoise. Mist reprend ce caractère doux dans un rituel de jour. Laissez tiédir la tasse et prenez le temps de la déguster.',
      science: "En infusant du Shou Mei de Fuding, des chercheurs ont observé que la température de l’eau changeait les quantités de caféine, de théanine et de catéchines dans la tasse. Commencez au bas de la plage de température suggérée et goûtez comment les feuilles s’expriment au fil des infusions.",
      food: 'Gardez de l’eau à portée de main et choisissez des aliments riches en eau que vous aimez, comme les poires, les petits fruits ou une soupe aux légumes et aux haricots. La régularité des repas compte davantage qu’un ingrédient précis.',
      routine: 'Essayez de vous coucher à des heures régulières et de prendre votre thé caféiné plus tôt. Demandez conseil si la bouche sèche, une soif inhabituelle ou les sueurs nocturnes persistent.',
      brew: 'Si vous aimez le thé blanc, prenez-en une petite tasse de jour. Un goût doux renseigne peu sur la teneur en caféine.'
    }
  },
  energy: {
    tea: 'pivot', name: 'Pivot', en: {
      title: 'Low reserves', term: 'Qi-deficiency tendency',
      summary: 'You reported running out of energy easily and needing more recovery. In TCM, qi is a way of talking about how active and resilient you feel.',
      fit: "If mornings feel slow and ordinary activity takes a lot out of you, Pivot fits as a low-key pause around a real meal or snack. We picked this yellow tea for its mellow character. In traditional accounts its classification ranges from mild to cool, so the pairing is about a manageable ritual while food and rest remain the priorities.",
      taste: "Mellow and gently nutty, with a toasted-grain character and a clean finish.",
      tradition: 'Our yellow tea is a mellow option for a pause. Some traditional accounts call yellow tea cool and others describe it as mild. Try it with a nourishing snack when you take a break.',
      science: "Yellow tea gets a warm, covered rest during processing. Heat and moisture change compounds in the leaf, helping give the cup its golden colour and softer, less grassy character. Sip Pivot warm and see what comes through as it cools.",
      food: 'Plan an easy meal or snack with fibre and protein, such as eggs or tofu with whole-grain toast and fruit, so tea does not become a substitute for food.',
      routine: 'Start with a short walk at a comfortable pace and make room for recovery. Get unexplained or persistent tiredness checked.',
      brew: 'Try a small cup with your usual daytime routine and notice your response. Pick water if caffeine is affecting your sleep.'
    }, fr: {
      title: 'Énergie en baisse', term: 'Tendance au vide de qi',
      summary: 'Vous dites manquer d’énergie rapidement et avoir besoin de récupérer. En MTC, le qi est une façon de parler de la vitalité et de la capacité à soutenir l’effort.',
      fit: "Si vous démarrez lentement et que les activités ordinaires vous demandent de récupérer, Pivot se prête à une pause tranquille avec un vrai repas ou une collation. On a choisi ce thé jaune pour sa rondeur. Les textes traditionnels le décrivent comme doux ou frais. Le jumelage mise sur un rituel simple, avec les repas et le repos en priorité.",
      taste: "Une tasse ronde, légèrement noisettée, qui rappelle les grains grillés et se termine sur une note nette.",
      tradition: 'Notre thé jaune offre une tasse douce pour une pause. Certains textes le décrivent comme frais, d’autres comme modéré. Essayez-le avec une collation nourrissante au moment de la pause.',
      science: "Les feuilles de thé jaune reposent au chaud et à couvert pendant la fabrication. La chaleur et l’humidité transforment certains composés, ce qui contribue à la couleur dorée et au goût plus doux et moins herbacé. Goûtez Pivot chaud, puis remarquez ce qui ressort quand il refroidit.",
      food: 'Prévoyez un repas ou une collation facile avec des fibres et des protéines, par exemple des œufs ou du tofu, une rôtie de grains entiers et un fruit.',
      routine: 'Commencez par une courte marche à un rythme confortable et prenez le temps de récupérer. Faites évaluer une fatigue persistante ou inexpliquée.',
      brew: 'Essayez une petite tasse de jour et observez votre réaction. Préférez l’eau si la caféine nuit à votre sommeil.'
    }
  },
  heavy: {
    tea: 'ember', name: 'Ember', en: {
      title: 'Heaviness after meals', term: 'Dampness tendency',
      summary: 'A sense of heaviness and sluggishness after eating showed up together. Dampness is a traditional way to describe this cluster of sensations.',
      fit: "When a usual meal leaves you feeling weighed down and the same sensation shows up elsewhere in your day, we match you with the traditional after-meal ritual of ripe Pu-erh. Ember is a good way to explore that custom in a small cup after lunch. Notice how the portion, the meal and the tea feel for you individually.",
      taste: "Deep, earthy and rounded, with a smooth finish.",
      tradition: 'Ripe Pu-erh is traditionally described as gently warming and often served after a rich meal. That custom informs this pairing.',
      science: "During pile fermentation, microbes, heat and moisture transform the leaf. Studies of ripe Pu-erh link this step to the development of its characteristic aroma. Take a moment to notice the earthy scent before your first sip after lunch.",
      food: 'Try a comfortably sized meal with vegetables, brown rice and tofu or fish. Eat at an unhurried pace and notice which portions or foods sit comfortably.',
      routine: 'If comfortable, take a short walk after a meal. Bring recurring or worsening digestive symptoms to a clinician.',
      brew: 'If you enjoy Pu-erh after food, start with a small cup earlier in the day. Leave room for water.'
    }, fr: {
      title: 'Lourdeur après les repas', term: 'Tendance à l’humidité',
      summary: 'La lourdeur et la baisse d’élan après les repas ressortent ensemble. L’humidité est un terme traditionnel qui regroupe ces sensations.',
      fit: "Quand un repas habituel vous laisse une sensation de lourdeur qui revient ailleurs dans la journée, on vous propose le rituel du pu-erh mûr après le repas. Ember permet de découvrir cette coutume avec une petite tasse après le dîner. Observez séparément comment vous vous sentez selon la portion, le repas et le thé.",
      taste: "Un goût profond, terreux et rond, avec une finale douce.",
      tradition: 'Le pu-erh mûr est traditionnellement décrit comme doucement réchauffant et souvent servi après un repas copieux. Cette coutume inspire l’association.',
      science: "Durant la fermentation en tas, les microorganismes, la chaleur et l’humidité transforment les feuilles. Des études sur le pu-erh mûr relient cette étape au développement de son arôme caractéristique. Après le dîner, prenez le temps de sentir les notes terreuses avant la première gorgée.",
      food: 'Essayez une portion qui vous convient avec des légumes, du riz brun et du tofu ou du poisson. Mangez tranquillement et observez les aliments et les quantités que vous tolérez bien.',
      routine: 'Si vous êtes à l’aise, faites une courte marche après le repas. Consultez si vos symptômes digestifs reviennent souvent ou s’aggravent.',
      brew: 'Si vous aimez le pu-erh après manger, commencez par une petite tasse en début de journée. Pensez aussi à l’eau.'
    }
  },
  heat: {
    tea: 'jade', name: 'Jade', en: {
      title: 'Runs warm', term: 'Warmth tendency',
      summary: 'Feeling warm indoors and staying warm even after you slow down came through together. TCM uses the idea of heat to describe a pattern like this.',
      fit: "If you tend to feel warm in a comfortable room and the warmth takes time to pass, Jade is our match for exploring the cooling side of traditional tea classifications. Its fresh, light character makes sense when you’re drawn to something brisk. Use water when your main aim is to cool down or quench thirst.",
      taste: "Fresh greens and chestnut, with a clean, lightly toasted finish.",
      tradition: 'Green tea is traditionally considered cooling. In TCM that describes the tea’s character, even when it is brewed hot.',
      science: "Heating the leaves in a pan early in processing slows oxidation and helps green tea retain catechins such as EGCG. Taste Jade with a short, gentle infusion to bring out the fresh character prized in Longjing.",
      food: 'Keep water handy and build a meal around foods you enjoy, such as cucumbers, cooked greens, barley and beans. Choose foods you tolerate, rather than banning whole food groups.',
      routine: 'Dress for the weather and adjust activity when it is hot. If heat intolerance or sweating is new or persistent, have it assessed.',
      brew: 'Try a light cup earlier in the day. Sip plain water for thirst.'
    }, fr: {
      title: 'Tendance à avoir chaud', term: 'Tendance à la chaleur',
      summary: 'Vos réponses font ressortir une sensation de chaleur à l’intérieur qui persiste même quand vous ralentissez. La MTC emploie la notion de chaleur pour décrire ce genre de tendance.',
      fit: "Si vous avez souvent chaud dans une pièce confortable et que la sensation tarde à passer, Jade permet de découvrir le côté rafraîchissant des classifications traditionnelles du thé. Son caractère frais et léger convient à l’envie de quelque chose de vif. Pour vous rafraîchir ou étancher votre soif, pensez d’abord à l’eau.",
      taste: "Des notes végétales et de châtaigne, avec une finale nette et légèrement grillée.",
      tradition: 'Le thé vert est traditionnellement considéré comme rafraîchissant. En MTC, le terme décrit son caractère, même si l’infusion est chaude.',
      science: "Chauffer les feuilles à la poêle tôt dans la fabrication ralentit l’oxydation et aide le thé vert à conserver des catéchines comme l’EGCG. Goûtez Jade avec une infusion courte et douce pour faire ressortir la fraîcheur recherchée dans le Longjing.",
      food: 'Gardez de l’eau sous la main et composez un repas avec des aliments que vous aimez, comme du concombre, des légumes verts cuits, de l’orge et des haricots. Choisissez ce que vous tolérez bien.',
      routine: 'Habillez-vous selon la météo et adaptez vos activités par temps chaud. Faites évaluer une intolérance à la chaleur ou une transpiration nouvelle ou persistante.',
      brew: 'Essayez une infusion légère en début de journée. Buvez de l’eau quand vous avez soif.'
    }
  },
  tension: {
    tea: 'vital', name: 'Vital', en: {
      title: 'Tension and stress', term: 'Qi-stagnation tendency',
      summary: 'Feeling wound up during stressful stretches and having trouble switching gears stood out. Some TCM writing calls this quality of constraint qi stagnation.',
      fit: "If your shoulders or jaw tense up when the day gets busy and you have trouble switching off, Vital gives you a concrete sensory cue for a break: pour a small cup, smell it before the first sip, and take a moment away from the task. We chose a traditionally neutral oolong with a distinctive aroma. If caffeine adds to that wired feeling, use a caffeine-free drink for the same ritual.",
      taste: "A fragrant oolong with floral and honey-like notes.",
      tradition: 'Oolong is often treated as neutral in Chinese dietary tradition. Dancong’s aroma makes it a natural choice for a short sensory pause.',
      science: "Researchers have identified floral compounds in Phoenix Dancong, including linalool derivatives and geraniol. These contribute to the scent that makes Vital such an inviting tea for a pause. Smell the warm leaves, then the empty cup, and compare the two.",
      food: 'Make time for a regular meal, such as a bowl of vegetables, whole grains and chickpeas. Eat away from screens if that helps you slow down.',
      routine: 'Try a short walk or a quiet pause between tasks. If stress regularly interferes with sleep or daily life, consider professional support.',
      brew: 'Keep it small and early if caffeine makes tension worse. An unsweetened caffeine-free drink is a sensible substitute.'
    }, fr: {
      title: 'Tension et stress', term: 'Tendance à la stagnation du qi',
      summary: 'La tension durant les périodes de stress et la difficulté à décrocher ressortent. Certains textes de MTC parlent alors de stagnation du qi.',
      fit: "Si la mâchoire ou les épaules se crispent quand ça se bouscule et que vous décrochez difficilement, Vital donne un repère sensoriel pour faire une pause. Versez une petite tasse, sentez-la avant la première gorgée et éloignez-vous un instant de la tâche. On a choisi un oolong traditionnellement neutre au parfum distinctif. Si la caféine vous rend plus nerveux, gardez le rituel avec une boisson sans caféine.",
      taste: "Un oolong parfumé aux notes florales et miellées.",
      tradition: 'Dans la tradition alimentaire chinoise, l’oolong est souvent considéré comme neutre. Le parfum du Dancong se prête à une courte pause sensorielle.',
      science: "Des chercheurs ont identifié des composés floraux dans le Dancong de Phoenix, dont des dérivés du linalol et le géraniol. Ils contribuent au parfum qui fait de Vital un thé agréable pour une pause. Sentez les feuilles chaudes, puis la tasse vide, et comparez les deux.",
      food: 'Prenez le temps de manger régulièrement, par exemple un bol de légumes, de grains entiers et de pois chiches. Éloignez les écrans si cela vous aide à ralentir.',
      routine: 'Essayez une courte marche ou une pause entre deux tâches. Si le stress nuit souvent au sommeil ou au quotidien, envisagez un accompagnement professionnel.',
      brew: 'Prenez une petite tasse tôt si la caféine accentue la tension. Une boisson sans caféine et non sucrée est une option.'
    }
  },
  balanced: {
    tea: 'stillpoint', name: 'Stillpoint', en: {
      title: 'Steady rhythm', term: 'Balanced tea ritual',
      summary: 'No single tendency dominated your answers. A balanced ritual is a useful starting point for exploring tea.',
      fit: "Stillpoint is a flexible starting point when there’s no clear single match. Lightly oxidized oolong sits between green and black tea in how it’s made, and the leaves unfold over several infusions. Try it in a small daytime cup and notice when you actually enjoy having tea in your routine.",
      taste: "Soft, floral and silky, with a lingering sweetness.",
      tradition: 'Lightly oxidized oolong sits between green and black tea in processing. Some Chinese dietary accounts place oolong in a neutral category.',
      science: "Partial oxidation changes the mix of compounds in oolong leaves as their flavour develops. The tightly rolled leaves open gradually in the gaiwan. Try two short infusions side by side and see how the floral aroma and texture change.",
      food: 'Keep a variety of vegetables, fruit, whole grains and protein foods in your meals. Water is a good default throughout the day.',
      routine: 'Keep doing what works. Make time for regular sleep, everyday movement and breaks you enjoy.',
      brew: 'Try a small daytime cup and notice how the rolled leaves open with each steep.'
    }, fr: {
      title: 'Rythme stable', term: 'Rituel de thé équilibré',
      summary: 'Aucune tendance ne domine dans vos réponses. Un rituel équilibré est un bon point de départ pour découvrir le thé.',
      fit: "Stillpoint est un point de départ souple quand aucune tendance ne se démarque clairement. L’oolong légèrement oxydé se situe entre le thé vert et le thé noir par sa fabrication, et ses feuilles s’ouvrent au fil des infusions. Essayez une petite tasse de jour et voyez à quel moment vous aimez prendre le thé.",
      taste: "Doux, floral et soyeux, avec une douceur qui persiste.",
      tradition: 'L’oolong légèrement oxydé se situe entre le thé vert et le thé noir par sa fabrication. Certains textes chinois le classent dans la catégorie neutre.',
      science: "L’oxydation partielle modifie le mélange de composés dans les feuilles à mesure que la saveur de l’oolong se développe. Les feuilles roulées s’ouvrent graduellement dans le gaiwan. Comparez deux infusions courtes pour remarquer comment le parfum floral et la texture évoluent.",
      food: 'Variez les légumes, fruits, grains entiers et aliments protéinés. L’eau demeure une bonne boisson au fil de la journée.',
      routine: 'Gardez les habitudes qui vous conviennent. Réservez du temps pour un sommeil régulier, le mouvement et des pauses qui vous plaisent.',
      brew: 'Essayez une petite tasse de jour et observez comment les feuilles roulées s’ouvrent à chaque infusion.'
    }
  }
};

const quizSources = [
  ['Traditional constitution questionnaire research', 'Recherche sur les questionnaires de constitution', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10164641/'],
  ['Research on how TCM constitution signs overlap', 'Recherche sur le chevauchement des signes en MTC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9356699/'],
  ['Tea categories in Chinese dietary tradition', 'Familles de thé dans la tradition alimentaire chinoise', 'https://health.people.com.cn/n1/2021/0315/c14739-32051473.html'],
  ['Tea processing and chemistry', 'Transformation et chimie du thé', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8605308/'],
  ['Fuding white tea infusion study', 'Étude sur l’infusion du thé blanc de Fuding', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6170294/'],
  ['Dancong aroma study', 'Étude sur les arômes du Dancong', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7751878/'],
  ['Research on the aroma of ripe Pu-erh', 'Recherche sur les arômes du pu-erh mûr', 'https://pubmed.ncbi.nlm.nih.gov/38984291/'],
  ['Research on yellowing and tea flavour', 'Recherche sur le jaunissement et les saveurs du thé', 'https://academic.oup.com/ijfst/article/57/7/4001/7806561'],
  ['Health Canada on caffeine', 'Santé Canada sur la caféine', 'https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods.html'],
  ['Canada’s Food Guide', 'Guide alimentaire canadien', 'https://www.canada.ca/en/health-canada/services/food-guide/explore/healthy-eating-recommendations.html'],
  ['Canada’s guidance on activity and nutrition', 'Conseils canadiens sur l’activité et l’alimentation', 'https://www.canada.ca/en/health-canada/services/food-guide/eating-support/physical-activity-lifestyle/healthy-eating.html']
];

if (typeof module !== 'undefined') module.exports = { quizProfiles, quizSources };
