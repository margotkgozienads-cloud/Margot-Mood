import { DEFAULTS } from './data.js';
import { renderHome } from './pages/home.js';import { renderMood } from './pages/mood.js';import { renderHobbies } from './pages/hobbies.js';import { renderSport } from './pages/sport.js';import { renderNutrition } from './pages/nutrition.js';import { renderTodo } from './pages/todo.js';import { renderCulture } from './pages/culture.js';import { renderSimpleList } from './pages/simpleList.js';import { renderProfil } from './pages/profil.js';
const KEY='margotMoodV8';
export const $=(s,r=document)=>r.querySelector(s); export const $$=(s,r=document)=>[...r.querySelectorAll(s)];
export function load(){return {...structuredClone(DEFAULTS), ...(JSON.parse(localStorage.getItem(KEY)||'{}'))};}
export function save(state){localStorage.setItem(KEY,JSON.stringify(state));}
export function addPoints(state,n){state.points=(state.points||0)+n;state.level=Math.max(1,Math.floor(state.points/250)+1);save(state);}
const root=$('#pageRoot'), title=$('#pageTitle'); let state=load();
const pages={home:['Accueil',renderHome],mood:['Mood',renderMood],hobbies:['Hobbies',renderHobbies],sport:['Sport',renderSport],nutrition:['Nutrition',renderNutrition],todo:['To-do',renderTodo],culture:['Culture',renderCulture],courses:['Courses',(r,s)=>renderSimpleList(r,s,'courses','Courses','Nouvel article')],appart:['Appart',(r,s)=>renderSimpleList(r,s,'appart','Appart','Nouvelle tâche appart')],envies:['Envies',(r,s)=>renderSimpleList(r,s,'envies','Envie à ajouter')],profil:['Profil',renderProfil]};
export function navigate(page){state=load(); title.textContent=pages[page][0]; $$('.navItem').forEach(b=>b.classList.toggle('active',b.dataset.page===page)); pages[page][1](root,state);}
$$('.navItem').forEach(b=>b.onclick=()=>navigate(b.dataset.page)); $('#antiScrollBtn').onclick=()=>{document.body.classList.toggle('locked'); $('#antiScrollBtn').textContent=document.body.classList.contains('locked')?'🔓':'🔒'};
navigate('home');
