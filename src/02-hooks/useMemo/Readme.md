# 🧠 Hook React : `useMemo`

## ✅ Définition

`useMemo` est un Hook React qui permet de **mémoriser le résultat d’un calcul** complexe ou coûteux, afin de **ne pas le recalculer inutilement à chaque rendu**.

```js
const valeurMémorisée = useMemo(() => {
  return calculLongOuComplexe(param);
}, [param]);
```

---

## 🧪 Exemple – Filtrer les tâches selon leur statut

```jsx
function TasksList({ tasks, status }) {
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => task.status === status);
  }, [tasks, status]);

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}
```

---

## 📊 Exemple – Statistiques sur les tâches

```jsx
function TaskStats({ tasks }) {
  const completedCount = useMemo(() => {
    return tasks.filter(task => task.status === 'done').length;
  }, [tasks]);

  return (
    <p>Tâches terminées : {completedCount}</p>
  );
}
```

---

## 📌 Quand l’utiliser

- Calculs **coûteux ou complexes**
- **Listes filtrées ou triées**
- Données **dérivées** de l’état (ex : somme, moyenne, etc.)
- Ne pas l’utiliser pour chaque variable — **utiliser uniquement quand nécessaire**

---

## 🧩 Exemple Kanban – Optimiser le rendu des colonnes

```jsx
function Column({ tasks, status }) {
  const columnTasks = useMemo(() => {
    return tasks.filter(t => t.status === status);
  }, [tasks, status]);

  return (
    <div className="p-2 w-1/3">
      <h2 className="text-lg font-bold mb-2">{status}</h2>
      {columnTasks.map(t => (
        <div key={t.id} className="card bg-base-100 p-2 mb-2 shadow">{t.text}</div>
      ))}
    </div>
  );
}
```

---

## 🛠️ Bonnes pratiques

- Ne pas utiliser `useMemo` pour des choses triviales : **cela peut être contre-productif**
- L’utiliser **lorsque les performances deviennent un sujet**
- S’assurer que **les dépendances sont correctement listées**

---

## 💡 Application dans le Kanban

- Rendu conditionnel de colonnes
- Calcul du **nombre de tâches par statut**
- Préparer une **liste de tâches filtrées par utilisateur, date, etc.**

---

## 📌 Résumé

| Sujet             | Description                                   |
| ----------------- | --------------------------------------------- |
| 🎯 Objectif       | Mémoriser un calcul pour éviter les recalculs |
| 🔧 Cas d’usage    | Filtres, tris, statistiques, données dérivées |
| ⚠️ Attention      | À utiliser seulement en cas de besoin réel    |
| 🧭 Étape suivante | Mémoriser une fonction avec `useCallback`     |
