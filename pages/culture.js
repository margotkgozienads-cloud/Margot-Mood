import { MOVIES } from '../data.js';
import { addPts, save, state } from '../app.js';

export function renderCulture() {
  setTimeout(bindCulture, 0);

  return `
    <div class="card">
      <div class="row">
        <div>
          <h2>🎬 Culture</h2>
          <p class="muted">Films, séries, livres, mangas et idées à découvrir</p>
        </div>
      </div>

      <div class="wrap">
        <button class="primary" id="btnAddCulture">➕ Ajouter</button>
        <button class="chip" id="btnSurpriseCulture">🎲 Surprise</button>
      </div>

      <div class="grid2">
        <div class="stat">
          <b id="statTotal">0</b>
          <span>œuvres</span>
        </div>
        <div class="stat">
          <b id="statDone">0</b>
          <span>validées</span>
        </div>
        <div class="stat">
          <b id="statFav">0</b>
          <span>favoris</span>
        </div>
        <div class="stat">
          <b id="statTodo">0</b>
          <span>à voir</span>
        </div>
      </div>

      <input class="input" id="cultureSearch" placeholder="Rechercher une œuvre...">

      <div class="wrap" id="cultureStatusFilters">
        <button class="chip sel" data-status="all">Tout</button>
        <button class="chip" data-status="todo">👀 À voir</button>
        <button class="chip" data-status="done">✅ Vu / lu</button>
        <button class="chip" data-status="fav">❤️ Favoris</button>
      </div>

      <div class="wrap" id="cultureCatFilters"></div>
    </div>

    <div class="card" id="addCultureForm" style="display:none;">
      <h3>➕ Ajouter une œuvre</h3>

      <input class="input" id="newCultureTitle" placeholder="Titre">

      <select class="input" id=
