import { MOVIES } from '../data.js';
import { addPts, save, state } from '../app.js';

export function renderCulture() {
  setTimeout(bindCulture);

  return `
    <!-- PAGE CULTURE -->
    <div class="card">
      <div class="row">
        <div>
          <h2>🎬 Culture</h2>
          <p class="muted">Films, séries, livres, mangas et envies à suivre</p>
        </div>
        <button class="primary" id="openAddCulture">➕ Ajouter</button>
      </div>

      <div class="grid2">
        <div class="stat">
          <b id="countDone">0</b>
          <span>vus / lus</span>
        </div>
        <div class="stat">
          <b id="countWishlist">0</b>
          <span>à découvrir</span>
        </div>
        <div class="stat">
          <b id="countFavs">0</b>
          <span>favoris</span>
        </div>
        <div class="stat">
          <b id="countTotal">0</b>
          <span>œuvres</span>
        </div>
      </div>

      <button class="chip" id="surpriseCulture">🎲 Surprise Culture</button>

      <input class="input" id="searchCulture" placeholder="Rechercher une œuvre...">

      <div class="wrap" id="typeFilters">
        <button class="chip sel" data-type="Tous">Tous</button>
        <button class="chip" data-type="Film">🎬 Films</button>
        <button class="chip" data-type="Série">📺 Séries</button>
        <button class="chip" data-type="Livre">📚 Livres</button>
        <button class="chip" data-type="Manga">📖 Mangas</button>
        <button class="chip" data-type="Anime">🍥 Animés</button>
      </div>

      <div class="wrap" id="statusFilters">
        <button class="chip sel" data-status="Tous">Tout</button>
        <button class="chip" data-status="Wishlist">📌 À découvrir</button>
        <button class="chip" data-status="Done">✅ Fait</button>
        <button class="chip" data-status="Fav">❤️ Favoris</button>
      </div>

      <div class="wrap" id="catFilters"></div>
    </div>

    <div class="card hidden" id="addCultureBox">
      <h3>➕ Ajouter une œuvre</h3>

