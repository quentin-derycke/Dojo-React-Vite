# 🧩 Hook React : `useReducer`

## ✅ Définition

`useReducer` est un Hook React qui permet de gérer un **état complexe** ou de **centraliser la logique de mise à jour de l’état**.  
Il fonctionne comme un **mini Redux local**, en séparant la logique métier (le reducer) de la mise à jour de l’état.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state` → l’état courant
- `dispatch` → fonction pour envoyer une action
- `reducer` → fonction `(state, action) => newState`
- `initialState` → valeur initiale de l’état

---

## 🧠 Pourquoi l’utiliser ?

- Pour gérer plusieurs actions sur un même état (ajout, suppression, mise à jour…)
- Pour éviter de chaîner plusieurs `useState`
- Pour centraliser la logique dans des projets plus structurés

---

## 📦 Exemple – Gestion de tâches dans un tableau Kanban

```jsx
import { useReducer } from 'react';

const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, {
        id: Date.now(),
        text: action.payload,
        status: 'todo',
      }];
    case 'UPDATE_TASK':
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.data }
          : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}

function useTasks() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  return { tasks, dispatch };
}
```

---

## 🔁 Exemple d'utilisation dans un composant

```jsx
function KanbanBoard() {
  const { tasks, dispatch } = useTasks();
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <input className="input" value={input} onChange={e => setInput(e.target.value)} />
      <button className="btn btn-primary" onClick={addTask}>Ajouter</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button className="btn btn-sm" onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🛠️ Bonnes pratiques

- Nomme clairement les types d’action (`ADD_TASK`, `UPDATE_TASK`…)
- Garder le `reducer` **pur** (pas d’effets de bord comme `fetch` dedans)
- Décomposer les actions trop complexes
- Optionnel : extraire le reducer dans un fichier à part

---

## 💡 Application dans le Kanban

Utiliser `useReducer` permet de :

- Centraliser toute la logique métier des tâches
- Faciliter la maintenance et les ajouts (ex: filtrage, drag & drop)
- Réutiliser le reducer dans un `useContext` pour un **état global**

---

## 📌 Résumé

| Sujet             | Description                                   |
| ----------------- | --------------------------------------------- |
| 🎯 Objectif       | Gérer un état complexe avec plusieurs actions |
| 🔧 Cas d’usage    | CRUD, état partagé entre composants, Kanban   |
| 🧠 Bénéfice       | Centralisation de la logique métier           |
| 🧭 Étape suivante | Intégrer `useContext` pour un état global     |
