import { MOVIES } from '../data.js';
import { addPts, save, state } from '../app.js';

export function renderCulture() {
  setTimeout(bindCulture);

  const categories = [
    'Toutes',
    ...new Set(MOVIES.map(m => m.cat))
  ];

  return `
    <div class="card">
      <h2>🎬 Culture</h2>

      <button id="surpriseCulture" class="primary">
        🎲 Surprise Culture
      </button>

      <input
        class="input"
        id="search"
        placeholder="Rechercher un film..."
      >

      <div class="wrap" id="cats">
        ${categories.map(c => `
          <button class="chip" data-cat="${c}">
            ${c}
          </button>
        `).join('')}
      </div>

    </div>

    <div id="movieList"></div>
  `;
}

function bindCulture() {

  let cat = 'Toutes';

  const searchInput = document.getElementById('search');
  const movieList = document.getElementById('movieList');

  function draw() {

    const q = searchInput.value.toLowerCase();

    const films = MOVIES.filter(m =>
      (cat === 'Toutes' || m.cat === cat) &&
      (
        m.title.toLowerCase().includes(q) ||
        m.sub.toLowerCase().includes(q)
      )
    );

    movieList.innerHTML = films.map(movie => {

      const watched = state.watched.includes(movie.title);
      const fav = state.favs.includes(movie.title);

      return `
        <div class="card">

          <div class="row">
            <h3>${movie.title}</h3>

            <span class="pill">
              ${watched ? '✅ Vu' : '👀 À voir'}
            </span>
          </div>

          <div class="wrap">
            <span class="pill">${movie.cat}</span>
            <span class="pill">${movie.sub}</span>
          </div>

          <div class="wrap">

            ${
              !watched
              ? `
                <button
                  class="chip"
                  data-watch="${movie.title}"
                >
                  ✅ Vu +50 pts
                </button>
              `
              : `
                <span class="pill">
                  +50 pts obtenus
                </span>
              `
            }

            <button
              class="chip"
              data-fav="${movie.title}"
            >
              ${fav ? '❤️ Favori' : '🤍 Favori'}
            </button>

          </div>

        </div>
      `;
    }).join('');
  }

  searchInput.oninput = draw;

  document.querySelectorAll('[data-cat]').forEach(btn => {

    btn.onclick = () => {

      cat = btn.dataset.cat;

      document
        .querySelectorAll('[data-cat]')
        .forEach(x => x.classList.remove('sel'));

      btn.classList.add('sel');

      draw();
    };
  });

  movieList.onclick = e => {

    const title = e.target.dataset.watch;

    if (title) {

      if (!state.watched.includes(title)) {

        state.watched.push(title);

        addPts(50);
        save();

        draw();

        alert('🎉 Film validé');
      }
    }

    const favTitle = e.target.dataset.fav;

    if (favTitle) {

      if (!state.favs.includes(favTitle)) {
        state.favs.push(favTitle);
      } else {
        state.favs = state.favs.filter(
          f => f !== favTitle
        );
      }

      save();

      draw();
    }
  };

  document.getElementById('surpriseCulture').onclick = () => {

    const unseen = MOVIES.filter(
      m => !state.watched.includes(m.title)
    );

    const random =
      unseen[Math.floor(Math.random() * unseen.length)];

    alert(`
🎬 ${random.title}

🏷️ ${random.cat}

🎯 ${random.sub}
    `);
  };

  draw();
}
