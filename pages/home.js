import { addPts, save, pct, level, nextLevel, statCard, go, state } from '../app.js';

const inspirations = {
  anti: "Pose ton téléphone pendant 30 minutes et profite du moment présent.",
  mood: "Va dans l'onglet Mood pour trouver une activité adaptée à ton humeur.",
  soft: "Range un seul petit espace pendant 5 minutes.",
  culture: "Choisis un film Feel Good dans l'onglet Culture."
};

export function renderHome(s) {

  setTimeout(bindHome);

  const today = s.todos.filter(t => t.date === 'today');
  const tomorrow = s.todos.filter(t => t.date === 'tomorrow');

  return `

  <div class="card">

    <div class="big">
      Bonjour Margot ✨
    </div>

    <div class="muted" style="margin-top:8px">
      Niveau ${level()} • ${s.points} points
    </div>

    <div class="progress" style="margin-top:16px">
      <div class="bar"
           style="width:${pct(s.points,nextLevel())}%">
      </div>
    </div>

    <div class="small muted" style="margin-top:8px">
      Prochain niveau : ${nextLevel()} points
    </div>

  </div>


  <h2 class="sectionTitle">
    💡 Inspirations
  </h2>

  <div class="card">

    <div class="grid grid2">

      <button class="chip inspirationBtn"
              data-idea="${inspirations.anti}">
        🔒 Anti-scroll
      </button>

      <button class="chip inspirationBtn"
              data-idea="${inspirations.mood}">
        🧠 Mood
      </button>

      <button class="chip inspirationBtn"
              data-idea="${inspirations.soft}">
        🌿 Tâche douce
      </button>

      <button class="chip inspirationBtn"
              data-idea="${inspirations.culture}">
        🎬 Culture
      </button>

    </div>

    <div
      id="inspirationResult"
      class="card soft"
      style="margin-top:15px">

      Sélectionne une inspiration.

    </div>

  </div>


  <h2 class="sectionTitle">
    📊 Tableau de bord
  </h2>

  <div class="grid grid2">

    ${statCard('Points',s.points)}
    ${statCard('Sport',s.sport.week+'/4')}
    ${statCard('Pas',s.steps)}
    ${statCard('To-do',today.filter(t=>!t.done).length)}
    ${statCard('Calories',s.calories)}
    ${statCard('Protéines',s.proteins+'g')}
    ${statCard('Stretching',s.sport.stretch+'/7')}
    ${statCard('Skincare',(s.daily.skincare?1:0)+'/7')}

  </div>


  <h2 class="sectionTitle">
    ✅ Mes quotidiens
  </h2>

  <div class="card">

    <label class="item">
      <span>🧴 Skincare</span>
      <input
        type="checkbox"
        data-daily="skincare"
        ${s.daily.skincare ? 'checked' : ''}>
    </label>

    <label class="item">
      <span>🧘 Stretching</span>
      <input
        type="checkbox"
        data-daily="stretching"
        ${s.daily.stretching ? 'checked' : ''}>
    </label>

    <label class="item">
      <span>💧 2L d'eau</span>
      <input
        type="checkbox"
        data-daily="water"
        ${s.daily.water ? 'checked' : ''}>
    </label>

    <div style="margin-top:16px">

      <div class="row">
        <b>👟 Pas du jour</b>
        <span>${s.steps} / 10000</span>
      </div>

      <div class="progress">
        <div
          class="bar"
          style="width:${pct(s.steps,10000)}%">
        </div>
      </div>

      <input
        class="input"
        id="steps"
        type="number"
        value="${s.steps}"
        style="margin-top:12px">

    </div>

  </div>


  <h2 class="sectionTitle">
    📅 Agenda
  </h2>

  <div class="card">

    <h3>Aujourd'hui</h3>

    ${
      today.length
      ? today.map(t => `
          <div class="item">
            <span>${t.text}</span>
          </div>
        `).join('')
      : '<p class="muted">Rien de prévu</p>'
    }

    ${
      s.agenda
      .filter(a => a.day === 'today')
      .map(a => `
        <div class="item">
          <span>${a.time}</span>
          <span>${a.title}</span>
        </div>
      `)
      .join('')
    }

  </div>


  <div class="card">

    <h3>Demain</h3>

    ${
      tomorrow.length
      ? tomorrow.map(t => `
          <div class="item">
            <span>${t.text}</span>
          </div>
        `).join('')
      : '<p class="muted">Rien de prévu</p>'
    }

    ${
      s.agenda
      .filter(a => a.day === 'tomorrow')
      .map(a => `
        <div class="item">
          <span>${a.time}</span>
          <span>${a.title}</span>
        </div>
      `)
      .join('')
    }

  </div>

  `;
}


function bindHome(){

  document
    .querySelectorAll(".inspirationBtn")
    .forEach(btn => {

      btn.onclick = () => {

        document.getElementById(
          "inspirationResult"
        ).innerHTML =
        `<b>${btn.dataset.idea}</b>`;

      };

    });

  document
    .querySelectorAll('[data-daily]')
    .forEach(c =>

      c.onchange = e => {

        state.daily[e.target.dataset.daily] =
          e.target.checked;

        if(e.target.checked){
          addPts(25);
        }

        save();
        go('home');

      }

    );

  document
    .getElementById('steps')
    .onchange = e => {

      state.steps =
        +e.target.value || 0;

      save();
      go('home');

    };

}
