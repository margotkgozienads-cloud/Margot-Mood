Margot Mood V7 Cloud PWA

Fichiers à uploader à la racine du dépôt GitHub Pages :
- index.html
- manifest.json
- sw.js

Firebase à configurer :
1. Créer un projet Firebase.
2. Ajouter une application Web et copier l'objet firebaseConfig.
3. Activer Authentication > Email/Password.
4. Créer Firestore Database.
5. Dans Firestore Rules, coller le contenu de firestore.rules.
6. Ouvrir l'app GitHub Pages, onglet Cloud, coller firebaseConfig.
7. Créer un compte avec email + mot de passe.
8. Se connecter avec le même compte sur PC et iPhone.

Important : la synchronisation utilise Firestore dans le document users/{uid}.
