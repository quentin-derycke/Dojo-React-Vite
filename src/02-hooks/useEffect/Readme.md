# ⚙️ Hook React : `useEffect`

## ✅ Définition

`useEffect` est un Hook React qui permet d’exécuter **du code après le rendu du composant**.  
Il est souvent utilisé pour :

- Gérer les **effets de bord** (side effects)
- **Charger des données** depuis une API
- **Mettre à jour le `localStorage`**
- **Écouter des événements du DOM**
- **Nettoyer** les effets à la suppression du composant

```js
useEffect(() => {
  // Code exécuté après le rendu
  return () => {
    // (Facultatif) Fonction de nettoyage
  };
}, [dependencies]);
```

---

## 🧠 Fonctionnement

- Le `useEffect` s'exécute **après le rendu** du composant.
- Il peut dépendre de **valeurs spécifiques** grâce au tableau de dépendances (`[]`).
- Si le tableau est vide, l’effet s'exécute **une seule fois** (comme `componentDidMount`).
- Si on retourne une fonction, elle sera exécutée **au démontage du composant** (comme `componentWillUnmount`).

---

## 📝 Exemple – Chargement initial des tâches depuis `localStorage`

```jsx
import { useState, useEffect } from 'react';

function usePersistedTasks() {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches au montage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // Sauvegarder les tâches à chaque changement
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, setTasks];
}
```

> 🔄 Idéal pour ton application Kanban : on **persiste les tâches** entre les sessions !

---

## 🧪 Exemple – Récupérer les tâches via une API simulée

```jsx
import { useState, useEffect } from 'react';

function TacheFetcher() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Chargement...</p> : (
        <ul>
          {tasks.map((t) => <li key={t.id}>{t.text}</li>)}
        </ul>
      )}
    </div>
  );
}
```

> 📡 Cet exemple simule un appel API pour pré-remplir un tableau de tâches.

---

## 🧼 Exemple – Nettoyage d’un effet (ex: minuterie)

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(interval); // Nettoyage au démontage
  };
}, []);
```

---

## ✅ Bonnes pratiques

- Toujours **spécifier les dépendances** dans le tableau (`[]`, `[valeur]`, etc.)
- Ne pas mettre de fonctions **asynchrones directement** dans `useEffect` (crée une fonction `async` interne si besoin)
- Bien **nettoyer les effets** (écouteurs, intervals, timeouts...)
- Éviter les effets inutiles qui se déclenchent à chaque rendu

---

## 💡 Application dans ton mentorat Kanban

1. **Charger les tâches existantes** depuis `localStorage`
2. **Sauvegarder automatiquement** les tâches à chaque modification
3. Simuler un **chargement d’état initial** (avec un loader)
4. Ajouter un **effet de notification** si une tâche est en retard (futur)

---

## 📌 Résumé

| Sujet             | Description                                           |
| ----------------- | ----------------------------------------------------- |
| 🎯 Objectif       | Gérer les effets secondaires après le rendu           |
| 🔧 Cas d’usage    | `localStorage`, fetch, timers, écouteurs              |
| 🧼 Nettoyage      | `return () => {...}` pour libérer les effets          |
| 🧭 Étape suivante | Gérer l’état global avec `useReducer` ou `useContext` |
