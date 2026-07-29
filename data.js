export const MOVIES = export const MOVIES = export const MOVIES = [

  // DISNEY

  { title:"Blanche-Neige et les Sept Nains", cat:"Disney", sub:"Classique" },
  { title:"Pinocchio", cat:"Disney", sub:"Classique" },
  { title:"Fantasia", cat:"Disney", sub:"Classique" },
  { title:"Dumbo", cat:"Disney", sub:"Classique" },
  { title:"Bambi", cat:"Disney", sub:"Classique" },
  { title:"Cendrillon", cat:"Disney", sub:"Classique" },
  { title:"Alice au Pays des Merveilles", cat:"Disney", sub:"Classique" },
  { title:"Peter Pan", cat:"Disney", sub:"Classique" },
  { title:"La Belle et le Clochard", cat:"Disney", sub:"Classique" },
  { title:"La Belle au Bois Dormant", cat:"Disney", sub:"Classique" },
  { title:"Les 101 Dalmatiens", cat:"Disney", sub:"Classique" },
  { title:"Merlin l'Enchanteur", cat:"Disney", sub:"Classique" },
  { title:"Le Livre de la Jungle", cat:"Disney", sub:"Classique" },
  { title:"Les Aristochats", cat:"Disney", sub:"Classique" },
  { title:"Robin des Bois", cat:"Disney", sub:"Classique" },
  { title:"Bernard et Bianca", cat:"Disney", sub:"Classique" },
  { title:"La Petite Sirène", cat:"Disney", sub:"Classique" },
  { title:"La Belle et la Bête", cat:"Disney", sub:"Classique" },
  { title:"Aladdin", cat:"Disney", sub:"Classique" },
  { title:"Le Roi Lion", cat:"Disney", sub:"Classique" },
  { title:"Pocahontas", cat:"Disney", sub:"Classique" },
  { title:"Le Bossu de Notre-Dame", cat:"Disney", sub:"Classique" },
  { title:"Hercule", cat:"Disney", sub:"Classique" },
  { title:"Mulan", cat:"Disney", sub:"Classique" },
  { title:"Tarzan", cat:"Disney", sub:"Classique" },
  { title:"Atlantide", cat:"Disney", sub:"Classique" },
  { title:"Lilo & Stitch", cat:"Disney", sub:"Classique" },
  { title:"La Planète au Trésor", cat:"Disney", sub:"Classique" },
  { title:"La Princesse et la Grenouille", cat:"Disney", sub:"Moderne" },
  { title:"Raiponce", cat:"Disney", sub:"Moderne" },
  { title:"Les Mondes de Ralph", cat:"Disney", sub:"Moderne" },
  { title:"La Reine des Neiges", cat:"Disney", sub:"Moderne" },
  { title:"Zootopie", cat:"Disney", sub:"Moderne" },
  { title:"Vaiana", cat:"Disney", sub:"Moderne" },
  { title:"Encanto", cat:"Disney", sub:"Moderne" },

  // PIXAR

  { title:"Toy Story", cat:"Pixar", sub:"Animation" },
  { title:"1001 Pattes", cat:"Pixar", sub:"Animation" },
  { title:"Toy Story 2", cat:"Pixar", sub:"Animation" },
  { title:"Monstres & Cie", cat:"Pixar", sub:"Animation" },
  { title:"Le Monde de Nemo", cat:"Pixar", sub:"Animation" },
  { title:"Les Indestructibles", cat:"Pixar", sub:"Animation" },
  { title:"Cars", cat:"Pixar", sub:"Animation" },
  { title:"Ratatouille", cat:"Pixar
export const MEALS = [{name:'Skyr + granola + fruits',kcal:380,prot:28,type:'Petit-déj'},{name:'Oeufs + avocat + pain complet',kcal:520,prot:26,type:'Petit-déj'},{name:'Poulet riz légumes',kcal:650,prot:45,type:'Déjeuner'},{name:'Saumon patate douce',kcal:620,prot:38,type:'Dîner'},{name:'Salade thon oeuf',kcal:480,prot:42,type:'Déjeuner'},{name:'Pâtes pesto poulet',kcal:720,prot:42,type:'Dîner'},{name:'Pinte bière blonde',kcal:220,prot:2,type:'Alcool'},{name:'Spritz',kcal:180,prot:0,type:'Alcool'},{name:'Verre de rosé',kcal:120,prot:0,type:'Alcool'}];
export const IDEAS = [['fatiguée','réconfort','Plaid, douche chaude, repas simple et épisode doudou.'],['stressée','calme','10 minutes de rangement doux puis respiration 4-7-8.'],['motivée','bouger','Petite séance express + playlist qui donne confiance.'],['seule','lien','Envoyer un vocal à quelqu’un que tu aimes, sans pression.'],['créative','inspiration','Mini moodboard photo, appart ou culture pendant 20 min.'],['triste','douceur','Skincare, tisane, zéro objectif compliqué ce soir.']];
export const LEVELS = [0,250,600,1200,2000,3000,4500,6500,9000,12000,16000,21000];
export const DEFAULT_STATE = {points:420,steps:3400,calories:0,proteins:0,daily:{skincare:false,stretching:false,water:false},todos:[{text:'Ranger 10 minutes',date:'today',done:false},{text:'Préparer sac de sport',date:'tomorrow',done:false}],agenda:[{day:'today',time:'09:30',title:'Point équipe'},{day:'tomorrow',time:'14:00',title:'Créneau focus'}],sport:{week:2,month:9,stretch:3,km:18,cal:0,sessions:[],period:{start:'',flow:'',notes:''}},hobbies:{photo:1,lecture:0,gaming:0,films:0,series:0,famille:0,amis:0,animaux:0,politique:0},lists:{courses:['Skyr','Poulet','Légumes','Fruits rouges'],appart:['Lessive','Aspirateur','Vérifier plantes'],envies:['Reprendre la photo','Soirée cinéma cosy']},watched:[],favs:[],rewards:[{name:'Café spécial',cost:300,bought:false},{name:'Bouquet de fleurs',cost:800,bought:false},{name:'Petit achat déco',cost:1500,bought:false}]};
