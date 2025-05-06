# 🧠 useState – Comprendre et utiliser l'état local dans React

`useState` est un Hook React qui permet de gérer **l’état local d’un composant**. Il retourne une paire : la valeur actuelle de l’état et une fonction pour la mettre à jour.

```js
const [state, setState] = useState(valeurInitiale);
```

- state → la valeur actuelle

- setState → fonction pour mettre à jour cette valeur

- initialValue → valeur initiale (string, number, array, object...)

---

## 🧩 Exemple de base – Compteur

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <p className="mb-2">Counter : {count}</p>
      <button className="btn btn-primary" onClick={() => setCompte(count + 1)}>
        Incrémenter
      </button>
    </div>
  );
}
```

---

## 📝 Exemple – Controlled Input

```jsx
function TaskInput() {
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    if (task.trim() !== '') {
      console.log('New Task:', task);
      setTask('');
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button className="btn mt-2" onClick={handleSubmit}>Add</button>
    </div>
  );
}
```

---

## 🧪 Exemple – Liste dynamique de tâches

```jsx
function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt('Enter a task');
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
    }
  };

  return (
    <div>
      <button className="btn btn-primary mb-4" onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-1">{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🛠️ Bonnes pratiques

- Ne jamais modifier directement l’état : toujours utiliser la fonction de mise à jour.
- `useState` peut stocker tout type de valeur : chaînes, nombres, tableaux, objets.
- Modifier l’état déclenche un nouveau rendu du composant.
- Les Hooks doivent être appelés **au niveau supérieur** du composant (jamais dans une condition ou une boucle).

---

## 💡 Application dans un tableau Kanban

```jsx
function TaskCard({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    // update the task logic...
    setIsEditing(false);
  };

  return (
    <div className="card bg-base-100 shadow-md p-4 mb-2">
      {isEditing ? (
        <>
          <input
            className="input input-bordered w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-sm mt-2" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{task.text}</p>
          <button className="btn btn-sm mt-2" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
```

---

## 📌 Résumé

| Sujet             | Description                                               | 
| ----------------- | --------------------------------------------------------- |
| 🎯 Objectif       | Gérer un état local dans un composant React               |
| 🔧 Cas d’usage    | Champs de formulaire, toggles, données locales            |
| ⚠️ À éviter       | Mutation directe de l’état, appels conditionnels de Hooks |
| 🧭 Étape suivante | Apprendre `useReducer` pour gérer un état plus complexe   |
