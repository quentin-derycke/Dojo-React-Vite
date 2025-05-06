# 🌐 Hook React : `useContext`

## ✅ Définition

`useContext` est un Hook qui permet à un composant de **consommer une valeur partagée** sans passer les props manuellement à chaque niveau de l’arborescence.

Il est souvent utilisé pour :

- Gérer **l’état global** (comme un mini Redux)
- Partager des **fonctions ou des données** entre plusieurs composants
- Coupler avec `useReducer` pour un **store centralisé**

```js
const value = useContext(MonContexte);
```

---

## 🧱 Étapes d’utilisation

1. Créer un contexte avec `createContext()`
2. Fournir le contexte avec `Context.Provider`
3. Consommer la valeur avec `useContext()` dans n’importe quel composant enfant

---

## 🧪 Exemple – Créer un store de tâches global avec `useReducer` + `useContext`

```jsx
import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, status: 'todo' }];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
```

---

## 🧩 Exemple d'utilisation dans un composant

```jsx
function TaskForm() {
  const { dispatch } = useTasks();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  };

  return (
    <div className="form-control">
      <input className="input input-bordered" value={text} onChange={e => setText(e.target.value)} />
      <button className="btn mt-2" onClick={handleSubmit}>Ajouter une tâche</button>
    </div>
  );
}

function TaskList() {
  const { tasks, dispatch } = useTasks();

  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id} className="mb-2 flex justify-between">
          {t.text}
          <button className="btn btn-sm" onClick={() => dispatch({ type: 'DELETE_TASK', payload: t.id })}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}
```

---

## 🛠️ Bonnes pratiques

- **Toujours envelopper** les composants consommateurs dans le `Provider`
- Extraire `useContext` dans un Hook custom (ex: `useTasks`) pour plus de lisibilité
- Ne pas abuser du contexte pour les valeurs qui changent très souvent

---

## 💡 Application dans le Dojo

- Permet de partager la **liste des tâches et les actions** à travers toute l’application
- Évite le **prop drilling** (passage manuel de props à chaque niveau)
- Combine parfaitement avec `useReducer` pour créer un **store réactif minimal**

---

## 📌 Résumé

| Sujet                 | Description                                       |
| --------------------- | ------------------------------------------------- |
| 🎯 Objectif           | Accéder à un état ou une fonction partagée        |
| 🔧 Cas d’usage        | État global, thèmes, utilisateur connecté, Kanban |
| 🤝 Combinaison idéale | `useContext` + `useReducer` pour un store minimal |
| 🧭 Étape suivante     | Ajouter persistance (`useEffect`, `localStorage`) |
