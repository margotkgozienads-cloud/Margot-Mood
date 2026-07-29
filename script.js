const cultureIdeas = [
  { title: 'About Time', meta: 'Film feel good • 2h03' },
  { title: 'The Bear', meta: 'Série intense • épisode court' },
  { title: 'Pride & Prejudice', meta: 'Film cosy • romance' },
  { title: 'Spy x Family', meta: 'Anime léger • 24 min' },
  { title: 'Les Carnets de Cerise', meta: 'BD douce • lecture rapide' },
  { title: 'Only Murders in the Building', meta: 'Série enquête • cosy' }
];
let cultureIndex = 0;
function newCulture(){
  cultureIndex = (cultureIndex + 1) % cultureIdeas.length;
  document.getElementById('cultureTitle').textContent = cultureIdeas[cultureIndex].title;
  document.getElementById('cultureMeta').textContent = cultureIdeas[cultureIndex].meta;
  setToast('Nouvelle surprise culture 🎲');
}
function setToast(message){
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}
document.querySelectorAll('.habit').forEach(btn => {
  btn.addEventListener('click', () => btn.classList.toggle('done'));
});
