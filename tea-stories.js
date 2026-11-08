const teaReferences = {
  tradition: ['Tea categories in Chinese dietary tradition', 'Les familles de thé dans la tradition alimentaire chinoise', 'https://health.people.com.cn/n1/2021/0315/c14739-32051473.html'],
  herbal: ['Review of classical Chinese writings on tea', 'Revue des textes chinois classiques sur le thé', 'https://yizhe.dmu.edu.cn/data/article/yxyzx/preview/pdf/20-heling.pdf'],
  seasonal: ['Seasonal tea customs in Chinese medicine', 'Les usages saisonniers du thé en médecine chinoise', 'https://cq.people.com.cn/n2/2021/1125/c365414-35022040.html'],
  processing: ['Research review on tea processing and chemistry', 'Revue scientifique sur la transformation et la chimie du thé', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8605308/'],
  caffeine: ['Health Canada on caffeine', 'Santé Canada et la caféine', 'https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods.html'],
  emberHistory: ['Research review on the making of Pu-erh', 'Revue scientifique sur la fabrication du pu-erh', 'https://www.sciencedirect.com/science/article/abs/pii/S0963996921007997'],
  emberScience: ['Study on microbial activity during pile fermentation', 'Étude sur l’activité microbienne durant la fermentation en tas', 'https://pubmed.ncbi.nlm.nih.gov/36441948/'],
  mistHistory: ['Fujian’s white tea heritage', 'Le patrimoine du thé blanc du Fujian', 'https://www.fujian.gov.cn/english/cultureandtravel/cultureandarts/202508/t20250807_6988976.htm'],
  mistScience: ['Study comparing Shou Mei with other Fuding white teas', 'Étude comparant le Shou Mei à d’autres thés blancs de Fuding', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6170294/'],
  stillpointOrigin: ['Alishan’s tea-growing villages', 'Les villages producteurs de thé d’Ali Shan', 'https://www.ali-nsa.net/en/explore/local-flavors'],
  stillpointHistory: ['Taiwan’s cultural archive on Qing Xin and Shizhuo', 'Archives culturelles de Taïwan sur le Qing Xin et Shizhuo', 'https://tcmb.culture.tw/zh-tw/detail?id=573583&indexCode=Culture_Event'],
  attention: ['Review of human studies on tea, theanine and caffeine', 'Revue d’études chez l’humain sur le thé, la théanine et la caféine', 'https://pubmed.ncbi.nlm.nih.gov/40314930/'],
  groundHistory: ['Yunnan’s agricultural department on Dianhong', 'Le ministère de l’Agriculture du Yunnan sur le Dianhong', 'https://nync.yn.gov.cn/html/2025/yzycfycj_0407/1418141.html'],
  groundScience: ['Research review on tea polyphenols and colour', 'Revue scientifique sur les polyphénols et la couleur du thé', 'https://doi.org/10.1097/nt.0000000000000304'],
  vitalHistory: ['China’s geographical indication profile for Phoenix Dancong', 'Fiche chinoise d’indication géographique du Dancong de Phoenix', 'https://english.cnipa.gov.cn/attach/0/f58ad13a80124345b20967c7fc5bcb8c.pdf'],
  vitalScience: ['Study on the aromas of Phoenix Dancong', 'Étude sur les arômes du Dancong de Phoenix', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7751878/'],
  pivotOrigin: ['Sichuan’s Mengding Mountain tea heritage', 'Le patrimoine du thé du mont Mengding au Sichuan', 'https://www.ihchina.cn/project_details/23781.html'],
  pivotHistory: ['Guide to the teas of Mengding Mountain', 'Guide des thés du mont Mengding', 'https://www.castscs.org.cn/cms_files/filemanager/1762450223/attach/20235/8b3873dc459d446289057ac98132717d.pdf'],
  pivotScience: ['Research review on yellowing and tea flavour', 'Revue scientifique sur le jaunissement et les saveurs du thé', 'https://academic.oup.com/ijfst/article/57/7/4001/7806561'],
  jadeHistory: ['Hangzhou’s Lion Peak tea garden', 'Le jardin de thé de la colline du Lion à Hangzhou', 'https://www.ehangzhou.gov.cn/2018-08/15/c_262281.htm'],
  jadeCraft: ['Hangzhou on the craft of pan-firing Longjing', 'La torréfaction du Longjing à la poêle selon Hangzhou', 'https://ehangzhou.gov.cn/2026-03/25/c_297094.htm'],
  greenResearch: ['U.S. National Center for Complementary and Integrative Health on tea', 'Centre national américain de santé complémentaire et intégrative, dossier sur le thé', 'https://www.nccih.nih.gov/health/tea']
};

const teaStories = {
  ember: {
    brew: ['95–100 °C', 5, '15–30'],
    sources: ['emberHistory', 'emberScience', 'seasonal'],
    en: {
      type: '2019 Menghai Shou Pu-erh',
      description: 'Deep and earthy, with the scent of a forest floor after rain and a smooth, mellow finish. Ember opens into a dark, almost mahogany cup.',
      notes: ['Earthy', 'Full-bodied', 'Mellow'],
      origin: 'Menghai, Yunnan, China',
      growers: 'In Menghai, in southern Yunnan, tea makers use a technique called wo dui. They moisten and pile the leaves, then manage warmth and moisture as the tea develops. That step helps create the deep colour and rounded taste associated with ripe Pu-erh.',
      history: 'Pu-erh has a long history in Yunnan. The modern ripe style, called shou, took shape in the 1970s as producers refined a faster way to develop the mellow character prized in aged teas.',
      fact: 'Shou means ripe. Sheng means raw. Those words tell you how the tea was made, and an older sheng is still sheng.',
      brewing: 'Give the leaves a quick rinse and discard that water. Start at the short end of the range, pour the gaiwan out completely, then add time as the cup gets lighter.',
      tcm: 'Traditional Chinese dietary writing often describes ripe Pu-erh as gently warming. That helps explain its association with cold-weather tea drinking and the custom of serving a dark, mellow cup after a rich meal.',
      science: 'During pile fermentation, microbes, moisture and heat change the leaf’s chemistry. This helps explain Ember’s dark colour and mellow flavour. Research on how the tea is made leaves the traditional idea of digestive warmth untested.'
    },
    fr: {
      type: 'Shou pu-erh de Menghai, 2019',
      description: 'Un thé profond et terreux qui rappelle le sous-bois après la pluie. La tasse prend une teinte acajou et se termine sur une finale toute ronde.',
      notes: ['Terreux', 'Corsé', 'Rond'],
      origin: 'Menghai, Yunnan, Chine',
      growers: 'À Menghai, dans le sud du Yunnan, les artisans utilisent une technique appelée wo dui. Ils humidifient les feuilles, les mettent en tas et surveillent la chaleur et l’humidité. Cette étape contribue à la couleur profonde et au goût rond du pu-erh mûr.',
      history: 'Le pu-erh a une longue histoire au Yunnan. Le style mûr moderne, appelé shou, a pris forme dans les années 1970, quand les producteurs ont perfectionné une méthode plus rapide pour retrouver la rondeur recherchée dans les thés vieillis.',
      fact: 'Shou veut dire « mûr » et sheng veut dire « cru ». Ces mots décrivent la fabrication. Un sheng reste un sheng en vieillissant.',
      brewing: 'Rincez brièvement les feuilles et jetez l’eau de rinçage. Commencez par une infusion courte, videz le gaiwan complètement, puis allongez les infusions quand la tasse devient plus légère.',
      tcm: 'Dans la tradition alimentaire chinoise, le pu-erh mûr est souvent décrit comme doucement réchauffant. Cette lecture aide à comprendre pourquoi on l’associe aux journées froides et à la tasse de thé sombre et ronde après un repas copieux.',
      science: 'Pendant la fermentation en tas, les microorganismes, l’humidité et la chaleur transforment la chimie des feuilles. Cela aide à expliquer la couleur foncée et le goût rond d’Ember. Les études sur la fabrication laissent ouverte la question de la chaleur digestive au sens traditionnel.'
    }
  },
  mist: {
    brew: ['90–95 °C', 5, '20–35'],
    sources: ['mistHistory', 'mistScience', 'herbal'],
    en: {
      type: '2018 Fuding Shou Mei · Aged white tea',
      description: 'A soft, golden cup with dry hay, dried fruit and an easy sweetness. Give it a few infusions and the fuller, aged character starts to show.',
      notes: ['Dried fruit', 'Hay', 'Soft sweetness'],
      origin: 'Pan Xi, Fuding, Fujian, China',
      growers: 'Pan Xi is in Fuding, a white-tea region in northeastern Fujian. White tea makers pay close attention to how the leaves lose moisture as they wither, then dry them. This simple-looking process depends on judging the leaves and the weather.',
      history: 'Fuding’s white-tea craft is recognized as intangible cultural heritage in China. Shou Mei is a leafier white tea than the bud-forward Silver Needle. Over time, a well-stored white tea can develop deeper aromas alongside its original sweetness.',
      fact: 'Shou Mei means “longevity eyebrows,” a reference to the look of the leaves.',
      brewing: 'Start at 90 °C for a softer cup. Try the warmer end of the range on a later steep if you want more body. Keep the leaves and brew again as long as the cup still tastes good.',
      tcm: 'White tea is often placed on the cool or mild side in Chinese dietary tradition. Views on aged white tea vary. The traditional association is with a refreshing cup, even when age gives it a deeper flavour.',
      science: 'A study of Fuding white teas, including Shou Mei, measured caffeine, theanine and catechins in the brew. Water temperature changed what ended up in the cup. Mist’s soft taste tells you about flavour, while its caffeine content depends on the leaves and how you brew them.'
    },
    fr: {
      type: 'Shou Mei de Fuding, 2018 · Thé blanc vieilli',
      description: 'Une tasse dorée tout en douceur, avec des notes de foin sec et de fruits séchés. La profondeur du thé vieilli se révèle au fil des infusions.',
      notes: ['Fruits séchés', 'Foin sec', 'Douceur légère'],
      origin: 'Pan Xi, Fuding, Fujian, Chine',
      growers: 'Pan Xi se trouve à Fuding, une région de thé blanc dans le nord-est du Fujian. Les artisans surveillent la perte d’humidité pendant le flétrissage, puis sèchent les feuilles. Cette méthode en apparence simple demande de savoir lire la feuille et la météo.',
      history: 'Le savoir-faire du thé blanc de Fuding fait partie du patrimoine culturel immatériel de la Chine. Le Shou Mei contient davantage de feuilles que les Aiguilles d’argent, riches en bourgeons. Bien conservé, un thé blanc peut développer des arômes plus profonds avec le temps.',
      fact: 'Shou Mei signifie « sourcils de longévité », un clin d’œil à l’apparence des feuilles.',
      brewing: 'Commencez à 90 °C pour une tasse plus douce. Essayez une eau un peu plus chaude à l’infusion suivante pour donner du corps au thé. Réinfusez tant que la tasse vous plaît.',
      tcm: 'Dans la tradition alimentaire chinoise, le thé blanc est souvent considéré comme frais ou doux. Les avis varient pour les thés blancs vieillis. On les associe à une tasse rafraîchissante, même lorsque l’âge a approfondi leur saveur.',
      science: 'Une étude sur les thés blancs de Fuding, dont le Shou Mei, a mesuré la caféine, la théanine et les catéchines dans l’infusion. La température de l’eau changeait ce qui passait dans la tasse. La douceur de Mist décrit son goût, tandis que sa teneur en caféine dépend des feuilles et de l’infusion.'
    }
  },
  stillpoint: {
    brew: ['90–95 °C', 5, '20–30'],
    sources: ['stillpointOrigin', 'stillpointHistory', 'processing', 'attention'],
    en: {
      type: 'Spring 2026 Ali Shan Qing Xin · Green oolong',
      description: 'Silky and floral, with a pale gold cup and a sweetness that lingers. The first pour is delicate. The next brings more body as the rolled leaves open.',
      notes: ['Fresh flowers', 'Silky', 'Lingering sweetness'],
      origin: 'Ali Shan, Chiayi, Taiwan',
      growers: 'In Chiayi, growers cultivate high-mountain tea across several cool, misty townships. For this style, makers gently oxidize the leaves and roll them into small balls that open across several infusions.',
      history: 'Taiwan’s cultural archive records Qing Xin taking root in Shizhuo in the 1980s. Local farmers organized a production group to support consistent quality and fairer prices. It is one example of how growers helped build Ali Shan’s high-mountain tea reputation.',
      fact: 'Look into the gaiwan after a few rounds. A handful of little green pellets can open into broad leaves, sometimes still attached to their stems.',
      brewing: 'Leave room in your gaiwan for the leaves to unfold. Give the first pour around 25 seconds. If the second tastes fuller, keep it short before gradually extending later steeps.',
      tcm: 'Oolong is often described as balanced or neutral in Chinese dietary tradition. For a lightly processed style like this one, that gives a simple way to place it between brisk green tea and richer black tea in a tasting.',
      science: 'Partial oxidation changes the balance of plant compounds in oolong. Human studies on caffeine and L-theanine have found modest short-term changes in some attention tasks at studied doses. Those findings concern specific preparations and doses. The amounts in a cup of Stillpoint depend on the leaves and the brew.'
    },
    fr: {
      type: 'Qing Xin d’Ali Shan, printemps 2026 · Oolong vert',
      description: 'Un oolong floral et soyeux à la robe dorée pâle. La première infusion est délicate. La suivante prend du corps à mesure que les feuilles roulées s’ouvrent.',
      notes: ['Fleurs fraîches', 'Soyeux', 'Douceur persistante'],
      origin: 'Ali Shan, Chiayi, Taïwan',
      growers: 'À Chiayi, les producteurs cultivent le thé de haute montagne dans plusieurs communes fraîches et brumeuses. Pour ce style, les artisans oxydent légèrement les feuilles et les roulent en petites boules qui s’ouvrent au fil des infusions.',
      history: 'Les archives culturelles de Taïwan retracent l’arrivée du Qing Xin à Shizhuo dans les années 1980. Les producteurs locaux se sont regroupés pour maintenir la qualité du thé et obtenir de meilleurs prix. Leur travail illustre comment les producteurs ont bâti la réputation d’Ali Shan.',
      fact: 'Regardez dans le gaiwan après quelques infusions. Ces petites perles vertes peuvent s’ouvrir en grandes feuilles, parfois encore attachées à leur tige.',
      brewing: 'Laissez de la place aux feuilles dans le gaiwan. Donnez environ 25 secondes à la première infusion. Si la deuxième est déjà plus corsée, gardez-la courte et allongez graduellement les suivantes.',
      tcm: 'Dans la tradition alimentaire chinoise, l’oolong est souvent décrit comme équilibré ou neutre. Pour un oolong peu oxydé comme celui-ci, c’est une façon simple de le situer entre un thé vert vif et un thé noir plus riche.',
      science: 'L’oxydation partielle modifie l’équilibre des composés de la feuille. Des études chez l’humain sur la caféine et la L-théanine ont observé des effets modestes à court terme sur certaines tâches d’attention, avec des doses précises. Les quantités présentes dans une tasse de Stillpoint dépendent des feuilles et de l’infusion.'
    }
  },
  ground: {
    brew: ['90–95 °C', 4, '10–20'],
    sources: ['groundHistory', 'groundScience', 'seasonal'],
    en: {
      type: 'Spring 2026 Fengqing Dianhong Jin Ya · Black tea',
      description: 'A copper-red cup with malt, baked sweetness and a smooth finish. Ground is the fullest, most breakfast-like black tea in the collection.',
      notes: ['Malt', 'Golden buds', 'Baked sweetness'],
      origin: 'Fengqing, Yunnan, China',
      growers: 'Fengqing’s tea growers work with Yunnan tea plants known for their sturdy leaves and plump buds. The Jin Ya style showcases golden buds. Tea makers roll the withered leaves and let oxidation develop their deeper colour before drying.',
      history: 'Yunnan’s agricultural department dates a key Dianhong trial to 1938. Tea specialist Feng Shaoqiu used local leaves and buds in Fengqing to make a bright red, richly scented tea that later took the name Dianhong.',
      fact: 'In China, this style is called red tea for the colour in the cup. In English, the same category is known as black tea.',
      brewing: 'Try 10–15 seconds first for a soft, malty cup. Add a few seconds to later steeps. If it gets dry or sharp, shorten the next pour.',
      tcm: 'Black tea is usually described as warming in Chinese dietary tradition, which is why it often appears in cold-season tea advice. For a taste comparison, try Ground beside Jade and notice how rounded the black tea feels.',
      science: 'Oxidation transforms some catechins into compounds such as theaflavins and thearubigins. These help shape the copper colour and briskness. They explain changes in the leaf and cup. The traditional warming category comes from a separate framework.'
    },
    fr: {
      type: 'Dianhong Jin Ya de Fengqing, printemps 2026 · Thé noir',
      description: 'Une tasse rouge cuivré aux notes maltées, avec une douceur qui rappelle le pain au four. Un thé noir ample qui se prête bien au déjeuner.',
      notes: ['Malt', 'Bourgeons dorés', 'Douceur grillée'],
      origin: 'Fengqing, Yunnan, Chine',
      growers: 'À Fengqing, les producteurs travaillent avec des théiers du Yunnan connus pour leurs feuilles robustes et leurs bourgeons charnus. Le style Jin Ya met en valeur les bourgeons dorés. Après le flétrissage et le roulage, les artisans laissent l’oxydation approfondir la couleur des feuilles avant le séchage.',
      history: 'Le ministère de l’Agriculture du Yunnan situe un essai marquant en 1938. Le spécialiste Feng Shaoqiu a utilisé des feuilles et des bourgeons de Fengqing pour produire un thé rouge vif au parfum riche, qui a ensuite pris le nom de Dianhong.',
      fact: 'En Chine, on parle de thé rouge en référence à la couleur de l’infusion. En français, cette même famille porte le nom de thé noir.',
      brewing: 'Essayez de 10 à 15 secondes pour une première tasse douce et maltée. Ajoutez quelques secondes aux infusions suivantes. Si le thé devient astringent, raccourcissez la prochaine.',
      tcm: 'Dans la tradition alimentaire chinoise, le thé noir est généralement décrit comme réchauffant. Voilà pourquoi il revient souvent dans les conseils de dégustation pour la saison froide. Comparez Ground à Jade pour remarquer la rondeur du thé noir.',
      science: 'L’oxydation transforme certaines catéchines en composés comme les théaflavines et les théarubigines. Ils contribuent à la teinte cuivrée et au caractère vif du thé. Ces changements sont mesurables dans les feuilles et l’infusion. La notion traditionnelle de chaleur relève d’un autre cadre.'
    }
  },
  vital: {
    brew: ['95–100 °C', 6, '5–15'],
    sources: ['vitalHistory', 'vitalScience', 'seasonal'],
    en: {
      type: 'Spring 2026 Wudong Mi Lan Xiang · Dancong oolong',
      description: 'An expressive Phoenix Mountain oolong. The first thing you notice is the orchid-like perfume. The next is a honeyed finish that stays after the sip.',
      notes: ['Orchid', 'Honeyed aroma', 'Bright finish'],
      origin: 'Wudong Mountain, Chaozhou, Guangdong, China',
      growers: 'In the Phoenix Mountains around Chaozhou, growers select tea plants for distinctive aromas. The local craft turns their leaves into long, twisted strands. This tea is listed from Wudong, one of the mountain tea-growing areas.',
      history: 'The name Dancong, “single bush,” recalls the historical practice of selecting distinctive plants and processing their harvests separately. Mi Lan Xiang is one of the aroma styles that grew out of this tradition.',
      fact: 'Mi Lan Xiang means “honey orchid fragrance.” Try smelling the empty cup after your first pour. The scent often lingers there.',
      brewing: 'Pour fast and drain fully. Try a five-second first infusion once the water is in, then add seconds as the leaves open. Use less leaf if you prefer a softer cup.',
      tcm: 'Oolong is often described as neutral in Chinese dietary tradition. Some seasonal accounts associate it with autumn. Vital’s strong perfume makes it a good example of how a tea in that category can still have a vivid sensory character.',
      science: 'Researchers comparing Phoenix Dancong styles identified aroma compounds such as linalool and geraniol. Different mixtures help explain the range of floral and honeyed scents. This research describes what you smell in the cup. The traditional idea of neutrality is a separate way of describing tea.'
    },
    fr: {
      type: 'Mi Lan Xiang de Wudong, printemps 2026 · Oolong Dancong',
      description: 'Un oolong expressif des montagnes du Phénix. Le parfum d’orchidée se révèle en premier, suivi d’une finale miellée qui reste après la gorgée.',
      notes: ['Orchidée', 'Parfum miellé', 'Finale vive'],
      origin: 'Mont Wudong, Chaozhou, Guangdong, Chine',
      growers: 'Dans les montagnes du Phénix, près de Chaozhou, les producteurs sélectionnent les théiers pour leurs arômes distinctifs. Le savoir-faire local façonne les feuilles en longues torsades. Ce thé est indiqué comme provenant de Wudong, l’un des secteurs de culture en montagne.',
      history: 'Dancong, « arbuste individuel », rappelle la pratique historique qui consistait à sélectionner des théiers aux qualités particulières et à transformer leurs récoltes séparément. Le Mi Lan Xiang est l’un des profils aromatiques issus de cette tradition.',
      fact: 'Mi Lan Xiang signifie « parfum de miel et d’orchidée ». Sentez la tasse vide après la première infusion. Le parfum s’y attarde souvent.',
      brewing: 'Versez rapidement et videz le gaiwan au complet. Essayez cinq secondes une fois l’eau versée, puis ajoutez quelques secondes à mesure que les feuilles s’ouvrent. Réduisez la quantité de feuilles si vous aimez un thé plus doux.',
      tcm: 'Dans la tradition alimentaire chinoise, l’oolong est souvent décrit comme neutre. Certains textes saisonniers l’associent à l’automne. Le parfum marqué de Vital montre à quel point un thé de cette famille peut être expressif.',
      science: 'En comparant des Dancong de Phoenix, des chercheurs ont repéré des composés aromatiques comme le linalol et le géraniol. Leurs différents mélanges aident à expliquer la diversité des parfums floraux et miellés. Ces travaux décrivent les arômes de la tasse. La neutralité est une notion propre au cadre traditionnel.'
    }
  },
  pivot: {
    brew: ['80–85 °C', 4, '20–35'],
    sources: ['pivotOrigin', 'pivotHistory', 'pivotScience'],
    en: {
      type: 'Spring 2026 Mengding Huangya · Yellow tea',
      description: 'A mellow yellow tea with a soft, nutty character. The cup is pale gold, with a gentle sweetness that is easy to miss if you drink it too hot.',
      notes: ['Soft nuttiness', 'Pale gold', 'Mellow'],
      origin: 'Mengding Mountain, Ya’an, Sichuan, China',
      growers: 'Mengding Mountain sits near the western edge of the Sichuan Basin. For this yellow-tea style, makers begin with tender buds. They heat the leaves, then let them rest covered and warm during a step known as men huang, or sealed yellowing.',
      history: 'Mengding Mountain has a long tea-making tradition around Ya’an. Huangya belongs to the yellow-tea family. Its covered resting step sets it apart from the green teas also made in the region.',
      fact: 'Huangya means “yellow buds.” The pale golden colour develops as the tea is made.',
      brewing: 'Start at 80 °C. Steep about 25 seconds, then taste. Add a little time or heat if the cup is too light. Keep the pour gentle and let the sweetness come through.',
      tcm: 'Some Chinese dietary accounts group yellow tea with the cooler teas, while others describe it as milder. Pivot is an easy way to taste what people mean by a mellow tea, regardless of where a text places it on the warming–cooling scale.',
      science: 'During sealed yellowing, heat and moisture change pigments and other compounds in the leaf. That helps explain why yellow tea can taste softer and less grassy than a green tea. The chemistry explains the sensory difference. Traditional cooling belongs to a separate framework.'
    },
    fr: {
      type: 'Mengding Huangya, printemps 2026 · Thé jaune',
      description: 'Un thé jaune rond aux notes délicatement noisettées. L’infusion est d’un or pâle. Sa douceur se remarque surtout quand la tasse refroidit un peu.',
      notes: ['Notes de noisette', 'Or pâle', 'Rond'],
      origin: 'Mont Mengding, Ya’an, Sichuan, Chine',
      growers: 'Le mont Mengding se trouve près du bord ouest du bassin du Sichuan. Pour ce style de thé jaune, les artisans travaillent avec de jeunes bourgeons. Après les avoir chauffés, ils les laissent reposer à couvert et au chaud, une étape appelée men huang, ou jaunissement à couvert.',
      history: 'Le mont Mengding s’inscrit dans une longue tradition de fabrication du thé autour de Ya’an. Le Huangya appartient à la famille des thés jaunes. Le repos à couvert le distingue des thés verts aussi produits dans la région.',
      fact: 'Huangya signifie « bourgeons jaunes ». La teinte dorée se développe pendant la fabrication.',
      brewing: 'Commencez à 80 °C et infusez environ 25 secondes avant de goûter. Si la tasse est trop légère, augmentez un peu le temps ou la température. Versez doucement pour laisser ressortir la douceur.',
      tcm: 'Certains textes de tradition alimentaire chinoise rangent le thé jaune du côté des thés frais. D’autres le décrivent comme plus doux. Pivot permet de goûter cette rondeur, quelle que soit sa place sur l’échelle traditionnelle du chaud et du frais.',
      science: 'Pendant le jaunissement à couvert, la chaleur et l’humidité modifient des pigments et d’autres composés des feuilles. Cela aide à expliquer le goût plus rond et moins herbacé du thé jaune. La chimie décrit cette différence de saveur. La fraîcheur traditionnelle relève d’un autre cadre.'
    }
  },
  jade: {
    brew: ['75–85 °C', 3, '20–35'],
    sources: ['jadeHistory', 'jadeCraft', 'processing', 'greenResearch'],
    en: {
      type: 'Pre-Qingming 2026 Shifeng Longjing · Green tea',
      description: 'Flat spring leaves brew into a fresh, clean cup with chestnut and tender greens. Start with gentle heat to let the sweetness sit alongside the vegetal notes.',
      notes: ['Chestnut', 'Tender greens', 'Clean finish'],
      origin: 'Shifeng, West Lake, Hangzhou, Zhejiang, China',
      growers: 'Shifeng, or Lion Peak, lies in the West Lake tea district of Hangzhou. Longjing makers heat and press the leaves in a pan. Their hand movements help shape the flat blades and develop the toasted aroma.',
      history: 'Longjing takes its name from the Dragon Well near the village. Hangzhou recognizes Shifeng as one of West Lake Longjing’s historic production areas. Early spring harvests are part of that region’s tea calendar.',
      fact: '“Pre-Qingming” means picked before Qingming, the early-April solar term. It describes the harvest window.',
      brewing: 'Use about 80 °C water for the first steep. Start at 25 seconds and add time if you want a stronger cup. Try it plain first to catch the chestnut note.',
      tcm: 'Green tea is commonly described as cooling in traditional Chinese medicine and associated with refreshment and thirst. In that framework, cooling is a traditional description of the tea even when you serve it hot.',
      science: 'Pan-firing slows the leaf’s oxidation by deactivating enzymes. That helps green teas retain catechins such as EGCG. Research on brewed green tea and on concentrated extracts uses different doses and preparations. The traditional cooling category is distinct from the chemistry researchers measure.'
    },
    fr: {
      type: 'Longjing de Shifeng, avant Qingming 2026 · Thé vert',
      description: 'Ces feuilles plates de printemps donnent une tasse fraîche aux notes de châtaigne et de jeunes pousses. Une eau moins chaude laisse la douceur s’exprimer à côté des notes végétales.',
      notes: ['Châtaigne', 'Jeunes pousses', 'Finale nette'],
      origin: 'Shifeng, lac de l’Ouest, Hangzhou, Zhejiang, Chine',
      growers: 'Shifeng, ou colline du Lion, se trouve dans la région du thé du lac de l’Ouest à Hangzhou. Les artisans chauffent et pressent les feuilles de Longjing dans une poêle. Leurs gestes aplatissent les feuilles et développent leurs arômes grillés.',
      history: 'Le Longjing tire son nom du puits du Dragon près du village. Hangzhou reconnaît Shifeng comme l’une des zones historiques de production du Longjing du lac de l’Ouest. Les premières récoltes du printemps font partie du calendrier de la région.',
      fact: '« Avant Qingming » désigne une récolte faite avant Qingming, un repère du calendrier solaire au début d’avril.',
      brewing: 'Essayez une eau à environ 80 °C et une première infusion de 25 secondes. Allongez ensuite si vous préférez un goût plus prononcé. Goûtez-le nature pour mieux saisir la note de châtaigne.',
      tcm: 'En médecine traditionnelle chinoise, le thé vert est souvent décrit comme rafraîchissant et associé à la soif. Dans ce cadre, la fraîcheur est une caractéristique traditionnelle du thé, même quand on le sert chaud.',
      science: 'La chauffe à la poêle désactive les enzymes qui favorisent l’oxydation. Le thé vert conserve ainsi des catéchines comme l’EGCG. Les études sur le thé vert infusé et celles sur les extraits concentrés utilisent des doses et des préparations différentes. La notion traditionnelle de fraîcheur se distingue de ce que la chimie mesure.'
    }
  }
};
