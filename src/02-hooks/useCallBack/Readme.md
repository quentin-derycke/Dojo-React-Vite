# 🔁 Hook React : `useCallback`

## ✅ Définition

`useCallback` est un Hook React qui permet de **mémoriser une fonction** entre les rendus pour éviter qu’elle ne soit recréée à chaque fois.  
C’est particulièrement utile quand on passe des fonctions en **props à des composants enfants** optimisés avec `React.memo`.

```js
const maFonction = useCallback(() => {
  // logique ici
}, [dependencies]);
```

---

## 🧠 Pourquoi l’utiliser ?

- Éviter de recréer une fonction à chaque re-render
- Éviter les re-rendus inutiles dans les composants enfants (avec `React.memo`)
- Optimiser les performances dans les **listes**, les **handlers**, les **drag & drop**

---

## 🧪 Exemple – Fonction passée à un composant enfant

```jsx
const handleDelete = useCallback((id) => {
  dispatch({ type: 'DELETE_TASK', payload: id });
}, [dispatch]);

return <TaskList onDelete={handleDelete} tasks={tasks} />;
```

> ✅ `handleDelete` ne sera recréée **que si `dispatch` change**.

---

## 🧩 Exemple – Enfant optimisé avec `React.memo`

```jsx
const TaskItem = React.memo(({ task, onDelete }) => {
  return (
    <div className="flex justify-between items-center">
      <span>{task.text}</span>
      <button className="btn btn-sm" onClick={() => onDelete(task.id)}>Supprimer</button>
    </div>
  );
});
```

> 🧠 Si `onDelete` est mémorisée avec `useCallback`, `TaskItem` **ne sera pas re-rendu inutilement**.

---

## 💡 Application dans le Kanban

- Passer des handlers (`onAdd`, `onDelete`, `onDragEnd`) à des composants enfants
- Prévenir les re-rendus inutiles lors du **drag and drop**
- Optimiser les **listes** de tâches avec des `React.memo` + `useCallback`

---

## 🛠️ Bonnes pratiques

- À utiliser **avec parcimonie**, uniquement si tu constates des re-rendus inutiles
- Associe-le à `React.memo` pour **maximiser le gain**
- Bien définir les **dépendances** (comme dans `useEffect`)

---

## 📌 Résumé

| Sujet             | Description                                         |
| ----------------- | --------------------------------------------------- |
| 🎯 Objectif       | Mémoriser une fonction pour éviter sa recréation    |
| 🔧 Cas d’usage    | Listes, handlers, callbacks pour composants enfants |
| ⚠️ Attention      | Ne pas en abuser — utile si couplé à `React.memo`   |
| 🧭 Étape suivante | Créer des custom hooks pour isoler la logique       |
