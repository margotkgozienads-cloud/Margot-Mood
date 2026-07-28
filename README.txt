Margot Mood V9 Finale

Objectif : version finale avec base stable + Firebase optionnel.

Fichiers à uploader à la racine du dépôt GitHub Pages :
- index.html
- manifest.json
- sw.js
- firestore.rules
- README.txt

Étapes Firebase :
1. Créer un projet Firebase avec un compte Google.
2. Ajouter une application Web et copier l'objet firebaseConfig.
3. Activer Authentication > Email/Password.
4. Créer Firestore Database.
5. Coller firestore.rules dans Firestore > Rules.
6. Ouvrir Margot Mood, onglet Sync, coller firebaseConfig.
7. Créer un compte puis utiliser le même compte sur iPhone et PC.

Sécurité : les règles limitent l'accès à /users/{uid}/apps/margotMood pour l'utilisateur connecté.
