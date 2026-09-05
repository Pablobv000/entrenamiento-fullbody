const todayLabel = document.getElementById('todayLabel');
const dayTabs = document.getElementById('dayTabs');
const content = document.getElementById('content');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');

let selectedDay = getDefaultDayKey();

function getDefaultDayKey() {
  const jsDay = new Date().getDay();
  const keys = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  if (jsDay >= 1 && jsDay <= 5) return keys[jsDay - 1];
  return 'lunes';
}

function setTodayLabel() {
  const formatter = new Intl.DateTimeFormat('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long'
  });
  todayLabel.textContent = `Hoy: ${formatter.format(new Date())}`;
}

function renderTabs() {
  dayTabs.innerHTML = '';
  appData.days.forEach(day => {
    const button = document.createElement('button');
    button.className = `day-tab ${selectedDay === day.key ? 'active' : ''}`;
    button.textContent = day.short;
    button.addEventListener('click', () => {
      selectedDay = day.key;
      renderTabs();
      renderDay();
    });
    dayTabs.appendChild(button);
  });
}

function renderExercise(exercise) {
  const demoBlock = exercise.media
    ? `<div class="demo-wrap">
         <img class="exercise-demo" src="${exercise.media}" alt="Demo de ${exercise.name}" loading="lazy" />
       </div>`
    : `<div class="note-card">Pendiente de demo</div>`;

  return `
    <article class="exercise-card single-col">
      <div>
        <h4 class="exercise-title">${exercise.name}</h4>
        <p class="exercise-meta">${exercise.prescription}</p>
        ${exercise.note ? `<p class="exercise-note">${exercise.note}</p>` : ''}
      </div>
      ${demoBlock}
      <div class="exercise-actions row-actions">
        <button class="btn btn-secondary" data-exercise='${JSON.stringify(exercise).replace(/'/g, '&apos;')}'>Ampliar demo</button>
      </div>
    </article>
  `;
}

function renderDay() {
  const day = appData.days.find(d => d.key === selectedDay);
  content.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <h2 class="panel-title">${day.title}</h2>
        <p class="panel-subtitle">${day.summary}</p>
      </div>

      <div class="section">
        <div class="note-card">${appData.demoNote}</div>
      </div>

      <div class="section">
        <h3 class="section-title">Calentamiento</h3>
        <div class="exercise-list">
          ${appData.warmup.map(renderExercise).join('')}
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Parte principal</h3>
        <div class="exercise-list">
          ${day.exercises.map(renderExercise).join('')}
        </div>
      </div>
    </section>

    <button class="footer-cta">Iniciar entrenamiento</button>
  `;

  attachExerciseEvents();
}

function attachExerciseEvents() {
  document.querySelectorAll('[data-exercise]').forEach(button => {
    button.addEventListener('click', () => {
      const exercise = JSON.parse(button.getAttribute('data-exercise').replace(/&apos;/g, "'"));
      openExerciseModal(exercise);
    });
  });
}

function openExerciseModal(exercise) {
  modalTitle.textContent = exercise.name;
  modalBody.innerHTML = `
    <div class="demo-wrap large-demo">
      ${exercise.media ? `<img class="exercise-demo large" src="${exercise.media}" alt="Demo ampliada de ${exercise.name}" />` : '<p>Pendiente de demo.</p>'}
    </div>
    <p>${exercise.prescription}</p>
    ${exercise.note ? `<p>${exercise.note}</p>` : ''}
  `;
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
  setTodayLabel();
  renderTabs();
  renderDay();
});
