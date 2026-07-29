import { addPts, save, state } from '../app.js';

const STARTER_CULTURE = [
  { title: "Le Roi Lion", type: "Film", cat: "Disney", sub: "Classique", note: "" },
  { title: "Mulan", type: "Film", cat: "Disney", sub: "Classique", note: "" },
  { title: "Vaiana", type: "Film", cat: "Disney", sub: "Moderne", note: "" },
  { title: "Encanto", type: "Film", cat: "Disney", sub: "Moderne", note: "" },
  { title: "Toy Story", type: "Film", cat: "Pixar", sub: "Animation", note: "" },
  { title: "Ratatouille", type: "Film", cat: "Pixar", sub: "Animation", note: "" },
  { title: "Coco", type: "Film", cat: "Pixar", sub: "Animation", note: "" },
  { title: "Iron Man", type: "Film", cat: "Marvel", sub: "Phase 1", note: "" },
  { title: "Avengers", type: "Film", cat: "Marvel", sub: "Phase 1", note: "" },
  { title: "Black Panther", type: "Film", cat: "Marvel", sub: "Phase 3", note: "" },
  { title: "Avengers Endgame", type: "Film", cat: "Marvel", sub: "Phase 3", note: "" },
  { title: "Harry Potter à l'École des Sorciers", type: "Film", cat: "Harry Potter", sub: "Saga", note: "" },
  { title: "Le Seigneur des Anneaux", type: "Film", cat: "Fantastique", sub: "Saga", note: "" },
  { title: "Interstellar", type: "Film", cat: "Science-Fiction", sub: "Culte", note: "" },
  { title: "Inception", type: "Film", cat: "Science-Fiction", sub: "Culte", note: "" }
];

export function renderCulture() {
  setTimeout(bindCulture, 0);

  return `
    <div class="card">
      <div class="row">
        <div>
          <h2>Culture</h2>
          <p class="muted">Ta bibliothèque perso : films, séries, livres, mangas, animés</p>
        </div>
      </div>

      <div class="wrap">
        <button class="primary" id="openCultureForm">+ Ajouter</button>
        <button class="chip" id="cultureSurprise">Surprise</button>
      </div>

      <div class="grid2">
        <div class="stat">
          <b id="cultureTotal">0</b>
          <span>œuvres</span>
        </div>
        <div class="stat">
          <b id="cultureDone">0</b>
          <span>validées</span>
        </div>
        <div class="stat">
          <b id="cultureFav">0</b>
          <span>favoris</span>
        </div>
        <div class="stat">
          <b id="cultureTodo">0</b>
          <span>à voir</span>
        </div>
      </div>

      <input class="input" id="cultureSearch" placeholder="Rechercher...">

      <div class="wrap" id="cultureStatus">
        <button class="chip sel" data-status="all">Tout</button>
        <button class="chip" data-status="todo">À voir</button>
        <button class="chip" data-status="done">Vu / lu</button>
        <button class="chip" data-status="fav">Favoris</button>
      </div>

      <div class="wrap" id="cultureCats"></div>
    </div>

    <div class="card" id="cultureForm" style="display:none;">
      <h3>Ajouter une œuvre</h3>

      <input class="input" id="cultureTitle" placeholder="Titre">

      <select class="input" id="cultureType">
        <option value="Film">Film</option>
        <option value="Série">Série</option>
        <option value="Livre">Livre</option>
        <option value="Manga">Manga</option>
        <option value="Anime">Anime</option>
        <option value="Documentaire">Documentaire</option>
      </select>

      <input class="input" id="cultureCat" placeholder="Catégorie : Disney, Marvel, Feel Good...">

      <input class="input" id="cultureSub" placeholder="Sous-catégorie : Classique, Phase 1, Romance...">

      <textarea class="input" id="cultureNote" rows="3" placeholder="Note perso facultative"></textarea>

      <div class="wrap">
        <button class="primary" id="saveCulture">Ajouter</button>
        <button class="chip" id="cancelCulture">Annuler</button>
      </div>
    </div>

    <div id="cultureList"></div>
  `;
}

function bindCulture() {
  initCulture();

  let currentStatus = "all";
  let currentCat = "Toutes";

  const list = document.getElementById("cultureList");
  const search = document.getElementById("cultureSearch");
  const catsBox = document.getElementById("cultureCats");

  function allItems() {
    return [
      ...STARTER_CULTURE,
      ...state.customCulture
    ];
  }

  function getId(item) {
    return item.type + "__" + item.title;
  }

  function isDone(item) {
    return state.doneCulture.includes(getId(item));
  }

  function isFav(item) {
    return state.favCulture.includes(getId(item));
  }

  function drawStats() {
    const items = allItems();

    document.getElementById("cultureTotal").textContent = items.length;
    document.getElementById("cultureDone").textContent = items.filter(isDone).length;
    document.getElementById("cultureFav").
