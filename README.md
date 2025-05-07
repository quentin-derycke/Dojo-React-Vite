
# 🧩 React Kanban Challenge – Code Dojo

Bienvenue dans cet atelier React ! Le but est de créer un tableau **Kanban** type Jira en 2h, en utilisant les hooks React, DaisyUI pour l’interface, et une structure en composants feature-based modulaire simple.

---

## 🚀 Démarrage rapide

Ce projet utilise **Vite** + **React** + **TailwindCSS** + **DaisyUI**.

### 📦 Installation

```bash
npm install
```

### ▶️ Lancer le serveur de développement

```bash
npm run dev
```

Le projet sera accessible sur : [http://localhost:5173](http://localhost:5173)

---

## 📁 Structure du projet

```
src/
 ┣ components/        → Composants UI (TaskCard, Column...)
 ┣ context/           → Stockage global avec useContext + 
 ┣ hooks/             → Hooks personnalisés
 ┣ pages/             → Page principale avec le tableau Kanban
 ┣ lib/               → Faire appel au librarie
 ┣ App.jsx            → Composant principal
 ┗ main.jsx           → Entrée de l’application
```

---

## 🎯 Objectif de l’atelier

Créer une application Kanban avec les fonctionnalités suivantes :

- ✅ Ajouter une tâche
- ✏️ Modifier une tâche
- ❌ Supprimer une tâche
- 🔄 Changer et définir le statut de la tâche
- Filtrer les Taches
- Priorité des tache
- Persistances des données dans le localStorage



- 🧠 Utiliser `useReducer`, `useContext`, `useEffect`
- 🎨 Utiliser les composants DaisyUI pour un rendu rapide et esthétique

---

## 📚 Ressources utiles


 - ⚡ **Vite (Build tool utilisé ici)**  
   - https://vitejs.dev

- 📘 **React Documentation**  
   - https://react.dev/

- 🎨 **DaisyUI (basé sur Tailwind CSS)**  
   - https://daisyui.com/components/

- 🧩 **Tailwind CSS**  
  - https://tailwindcss.com/docs
  - https://nerdcave.com/tailwind-cheat-sheet

- 🧠 **React Hooks Cheatsheet**  
  - https://blog.logrocket.com/-react-hooks-cheat-sheet-solutions-common-problems/

- 🛠 **Babel JSX REPL**  
  - https://babeljs.io/repl

- 🎁**Drag and Drop libraries**
  - https://dev.to/puckeditor/top-5-drag-and-drop-libraries-for-react-24lb

 
---

## 👨‍🏫 Conseil

Garder en mémoire que le projet est organisé par **fonctionnalité** (feature-based) et donc  à bien séparer logique et UI. L'essentiel des composants pour constuire le Kanban sont déjà initialisés.
---

Bon code dojo ! 💻🔥
