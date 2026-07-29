import { DEFAULT_STATE, LEVELS } from './data.js';

import { renderHome } from './pages/home.js';
import { renderMood } from './pages/mood.js';
import { renderHobbies } from './pages/hobbies.js';
import { renderSport } from './pages/sport.js';
import { renderNutrition } from './pages/nutrition.js';
import { renderTodo } from './pages/todo.js';
import { renderCulture } from './pages/culture.js';
import { renderListPage } from './pages/simpleList.js';
import { renderProfil } from './pages/profil.js';

const KEY = 'margotMoodV11Clean';

export const root = document.getElementById('root');
export const title = document.getElementById('pageTitle');

export const PAGES = {
  home: {
    label: 'Accueil',
    icon: '🏠',
    render: renderHome
  },
  mood: {
    label: 'Mood',
    icon: '🧠',
    render: renderMood
  },
  hobbies: {
    label: 'Hobbies',
    icon: '✨',
    render: renderHobbies
  },
  sport: {
    label: 'Sport',
    icon: '🏃',
    render: renderSport
  },
  nutrition: {
    label: 'Nutrition',
    icon: '🥗',
    render: renderNutrition
  },
  todo: {
    label: 'To-do',
    icon: '✅',
    render: renderTodo
  },
  culture: {
    label: 'Culture',
    icon: '🎬',
    render: renderCulture
  },
  courses: {
    label: 'Courses',
    icon: '🛒',
    render: function(s) {
      return renderListPage(s, 'courses', 'Courses', 'Nouvel article');
    }
  },
  appart: {
    label: 'Appart',
    icon: '🏡',
    render: function(s) {
      return renderListPage(s, 'appart', 'Appart', 'Nouvelle tâche appart');
    }
  },
  envies: {
    label: 'Envies',
    icon: '💛',
    render: function(s) {
      return renderListPage(s, 'envies', 'Envies', 'Nouvelle envie');
    }
  },
  profil: {
    label: 'Profil',
    icon: '👤',
    render: renderProfil
  }
};

export function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');

    return {
      ...structuredClone(DEFAULT_STATE),
      ...(saved || {})
    };
  } catch (e) {
    console.error('Erreur localStorage', e);
    localStorage.removeItem(KEY);
    return structuredClone(DEFAULT_STATE);
  }
}

export let state = load();

export function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function setState(s) {
  state = s;
  save();
}

export function addPts(n) {
  if (!state.points) state.points = 0;
  state.points += n;
  save();
}

export function level() {
  let l = 1;

  LEVELS.forEach(function(v, i) {
    if (state.points >= v) {
      l = i + 1;
    }
  });

  return l;
}

export function nextLevel() {
  return LEVELS[level()] || LEVELS[LEVELS.length - 1];
}

export function pct(v, m) {
  if (!m) return 0;
  return Math.min(100, Math.round((v / m) * 100));
}

export function statCard(t, v) {
  return `
    <div class="card stat">
      <b>${t}</b>
      <div>${v}</div>
    </div>
  `;
}

export function go(p) {
  try {
    if (!PAGES[p]) {
      p = 'home';
    }

    state = load();

    document.querySelectorAll('#nav button').forEach(function(b) {
      b.classList.toggle('active', b.dataset.p === p);
    });

    if (title) {
      title.textContent = PAGES[p].label;
    }

    if (root) {
      root.innerHTML = PAGES[p].render(state);
    }

    if (PAGES[p].bind) {
      PAGES[p].bind();
    }
  } catch (err) {
    console.error('Erreur page', p, err);

    if (root) {
      root.innerHTML = `
        <div class="card">
          <h2>Oups</h2>
          <p class="muted">
            La page "${p}" a planté, mais l'application fonctionne encore.
          </p>
          <p class="muted">
            Erreur : ${err.message}
          </p>
          <button class="primary" id="resetApp">
            Réinitialiser l'application
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('resetApp');

      if (resetBtn) {
        resetBtn.onclick = function() {
          localStorage.removeItem(KEY);
          location.reload();
        };
      }
    }
  }
}

const nav = document.getElementById('nav');

if (nav) {
  nav.innerHTML = Object.entries(PAGES).map(function(entry) {
    const k = entry[0];
    const p = entry[1];

    return `
      <button data-p="${k}">
        ${p.icon}
        <span>${p.label}</span>
      </button>
    `;
  }).join('');

  nav.querySelectorAll('button').forEach(function(b) {
    b.onclick = function() {
      go(b.dataset.p);
    };
  });
}

const lockBtn = document.getElementById('lockBtn');

if (lockBtn) {
  lockBtn.onclick = function() {
    document.body.classList.toggle('locked');
  };
}

go('home');
