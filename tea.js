const teaPageText = {
  en: {
    collection: 'Collection', bag: 'Bag', language: 'Lire en français', back: 'Back to the collection',
    gallery: 'Product photos', hero: 'Tin', leaves: 'Leaves', lifestyle: 'Lifestyle',
    add: 'Add to bag', added: 'Added to your bag.', origin: 'Where it grows',
    history: 'History', fact: 'Did you know?', brewing: 'How to brew it',
    tcm: 'The traditional Chinese medicine view', science: 'What the science says',
    links: 'On this page', sources: 'Sources and further reading',
    growerNote: 'The individual grower for this lot is pending supplier confirmation.',
    brewIntro: 'Gongfu brewing is a series of short steeps using the same leaves. Here’s a starting point.',
    water: 'Water', ratio: 'Leaves per 100 mL', time: 'First steep',
    tcmNote: 'In this tradition, “warming” and “cooling” are categories separate from the temperature in your cup. The descriptions here are cultural context.',
    scienceNote: 'This tea naturally contains caffeine. The amount in your cup varies with the leaf and how you brew it.',
    missing: 'This tea page is unavailable. You can find all seven teas in the collection.'
  },
  fr: {
    collection: 'Collection', bag: 'Panier', language: 'Read in English', back: 'Retour à la collection',
    gallery: 'Photos du produit', hero: 'Boîte', leaves: 'Feuilles', lifestyle: 'Ambiance',
    add: 'Ajouter au panier', added: 'Ajouté à votre panier.', origin: 'Région et producteurs',
    history: 'Histoire', fact: 'Le saviez-vous?', brewing: 'Comment l’infuser',
    tcm: 'Le regard de la médecine traditionnelle chinoise', science: 'Ce que dit la science',
    links: 'Sur cette page', sources: 'Sources et lectures',
    growerNote: 'L’identité du producteur de ce lot reste à confirmer auprès du fournisseur.',
    brewIntro: 'L’infusion gongfu consiste à infuser les mêmes feuilles plusieurs fois, brièvement. Voici un point de départ.',
    water: 'Eau', ratio: 'Feuilles par 100 mL', time: 'Première infusion',
    tcmNote: 'Dans cette tradition, « réchauffant » et « rafraîchissant » décrivent des catégories distinctes de la température de l’infusion. Ces descriptions donnent un contexte culturel.',
    scienceNote: 'Ce thé contient naturellement de la caféine. La quantité dans votre tasse varie selon les feuilles et l’infusion.',
    missing: 'Cette fiche est indisponible. Vous trouverez les sept thés dans la collection.'
  }
};

const page = document.getElementById('tea');
const language = document.getElementById('language');
let currentLanguage = localStorage.getItem('cc-lang') === 'fr' ? 'fr' : 'en';
let product;
let selectedPhoto = 'hero';

function renderTea() {
  const labels = teaPageText[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.getElementById('collection-link').textContent = labels.collection;
  document.getElementById('bag-link').textContent = labels.bag;
  language.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
  language.setAttribute('aria-label', labels.language);
  const back = `<a class="back" href="/#collection">← ${labels.back}</a>`;
  if (!product) {
    page.innerHTML = `${back}<p role="status">${labels.missing}</p>`;
    return;
  }

  const story = teaStories[product.id];
  const copy = story[currentLanguage];
  const [temperature, grams, seconds] = story.brew;
  const photo = product.photos.find(image => image.type === selectedPhoto);
  const price = new Intl.NumberFormat(currentLanguage === 'fr' ? 'fr-CA' : 'en-CA', {
    style: 'currency', currency: 'CAD'
  }).format(product.price_cad);
  const sections = ['origin', 'history', 'brewing', 'tcm', 'science'];
  const references = [...story.sources, 'tradition', 'caffeine'];
  document.title = `${product.name} · ${copy.type} · Cha & Chi`;
  document.querySelector('meta[name="description"]').content = copy.description;
  page.innerHTML = `
    ${back}
    <article>
      <div class="product-hero">
        <div class="gallery">
          <img class="hero-image" id="main-photo" src="/${photo.path}" alt="${product.name} · ${labels[photo.type]}" width="900" height="600">
          <div class="thumbs" role="group" aria-label="${labels.gallery}">
            ${product.photos.map(image => `
              <button class="thumb" type="button" data-photo="${image.type}" aria-pressed="${image.type === selectedPhoto}">
                <img src="/${image.path}" alt="" width="55" height="36">
                ${labels[image.type]}
              </button>`).join('')}
          </div>
        </div>
        <div class="hero-copy">
          <div class="eyebrow">${copy.origin}</div>
          <h1>${product.name}</h1>
          <div class="type">${copy.type}</div>
          <p>${copy.description}</p>
          <ul class="tasting-notes">${copy.notes.map(note => `<li>${note}</li>`).join('')}</ul>
          <div class="buy">
            <strong>${price} · ${product.weight_grams} g</strong>
            <button type="button" id="add-to-bag">${labels.add}</button>
          </div>
          <p class="buy-feedback" id="buy-feedback" role="status"></p>
        </div>
      </div>
      <nav class="jump-links" aria-label="${labels.links}">
        ${sections.map(id => `<a href="#${id}">${labels[id]}</a>`).join('')}
      </nav>
      <div class="reading">
        <section id="origin">
          <h2>${labels.origin}</h2>
          <p><strong>${copy.origin}</strong></p>
          <p>${copy.growers}</p>
          <p class="grower-note">${labels.growerNote}</p>
        </section>
        <section id="history">
          <h2>${labels.history}</h2>
          <p>${copy.history}</p>
          <aside class="fun-fact">
            <h3>${labels.fact}</h3>
            <p>${copy.fact}</p>
          </aside>
        </section>
        <section id="brewing">
          <h2>${labels.brewing}</h2>
          <p>${labels.brewIntro}</p>
          <dl class="brew-specs">
            <div><dt>${labels.water}</dt><dd>${temperature}</dd></div>
            <div><dt>${labels.ratio}</dt><dd>${grams} g</dd></div>
            <div><dt>${labels.time}</dt><dd>${seconds} s</dd></div>
          </dl>
          <p>${copy.brewing}</p>
        </section>
        <section id="tcm">
          <h2>${labels.tcm}</h2>
          <p>${copy.tcm}</p>
          <p class="context">${labels.tcmNote}</p>
        </section>
        <section id="science">
          <h2>${labels.science}</h2>
          <p>${copy.science}</p>
          <p class="context">${labels.scienceNote}</p>
        </section>
        <section>
          <h2>${labels.sources}</h2>
          <ul class="sources">${references.map(key => {
            const [en, fr, url] = teaReferences[key];
            return `<li><a href="${url}">${currentLanguage === 'fr' ? fr : en}</a></li>`;
          }).join('')}</ul>
        </section>
      </div>
    </article>`;
}

language.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
  localStorage.setItem('cc-lang', currentLanguage);
  renderTea();
});

page.addEventListener('click', event => {
  const thumbnail = event.target.closest('[data-photo]');
  if (thumbnail) {
    selectedPhoto = thumbnail.dataset.photo;
    const photo = product.photos.find(image => image.type === selectedPhoto);
    const mainPhoto = document.getElementById('main-photo');
    mainPhoto.src = '/' + photo.path;
    mainPhoto.alt = `${product.name} · ${teaPageText[currentLanguage][selectedPhoto]}`;
    page.querySelector('.thumb[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
    thumbnail.setAttribute('aria-pressed', 'true');
  }
  if (event.target.id === 'add-to-bag') {
    let cart = {};
    try {
      cart = JSON.parse(localStorage.getItem('cc-cart') || '{}') || {};
    } catch {}
    const quantity = Number(cart[product.id]) || 0;
    cart[product.id] = quantity + 1;
    localStorage.setItem('cc-cart', JSON.stringify(cart));
    const feedback = document.getElementById('buy-feedback');
    feedback.textContent = teaPageText[currentLanguage].added + ' ';
    const bag = document.createElement('a');
    bag.href = '/#bag';
    bag.textContent = teaPageText[currentLanguage].bag;
    feedback.append(bag);
  }
});

async function loadTea() {
  try {
    const id = new URLSearchParams(window.location.search).get('tea');
    const response = await fetch('/catalog.json');
    if (response.ok && Object.hasOwn(teaStories, id)) {
      const catalog = await response.json();
      product = catalog.products.find(tea => tea.id === id);
    }
  } catch {}
  renderTea();
  if (product && window.location.hash) {
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }
}

loadTea();
