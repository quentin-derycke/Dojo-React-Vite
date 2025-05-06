# 🔍 Hook React : `useRef`

## ✅ Définition

`useRef` est un Hook React qui permet de :

- Créer une **référence mutable** qui persiste entre les rendus
- **Accéder directement à un élément DOM** sans déclencher de re-render
- Stocker des **valeurs mutables** sans relancer un rendu

```js
const ref = useRef(valeurInitiale);
```

- `ref.current` contient la valeur mutable

---

## 📌 Cas d’usage courants

- Focus automatique sur un champ
- Scroll vers un élément
- Stocker un compteur, une précédente valeur, un interval ID
- Accès direct au DOM pour des animations, mesures, etc.

---

## 🧪 Exemple – Focus automatique sur un champ

```jsx
import { useRef, useEffect } from 'react';

function FieldWithFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Je prends le focus"
      className="input input-bordered w-full max-w-xs"
    />
  );
}
```

> ✅ Ici, `inputRef.current` référence le champ DOM. On lui applique le focus après le rendu initial.

---

## 🧠 Exemple – Stocker une valeur sans re-render

```jsx
function Timer() {
  const tickRef = useRef(0);

  const handleClick = () => {
    tickRef.current += 1;
    console.log("Ticks :", tickRef.current);
  };

  return (
    <button className="btn btn-secondary" onClick={handleClick}>
      Ajouter un tick
    </button>
  );
}
```

> 🧠 `useRef` garde en mémoire la valeur entre les rendus **sans déclencher de mise à jour du composant**.

---

## 🧩 Exemple dans le Kanban – Focus après ajout de tâche

```jsx
function TaskForm({ onAdd }) {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
      inputRef.current?.focus(); // Re-focus après ajout
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input input-bordered"
        placeholder="Nouvelle tâche"
      />
      <button className="btn mt-2" onClick={handleSubmit}>Ajouter</button>
    </div>
  );
}
```

---

## 🛠️ Bonnes pratiques

- Ne pas utiliser `useRef` pour des logiques qui doivent déclencher un rendu → préférer `useState`
- Utile pour **des références DOM**, ou pour **mémoriser une valeur entre deux cycles**
- Ne jamais oublier `.current` pour accéder ou modifier la valeur

---

## 💡 Application dans le Kanban

- Focus auto sur le champ de saisie
- Scroll automatique vers la nouvelle tâche
- Gérer un `dragRef` pour les effets visuels pendant le drag and drop

---

## 📌 Résumé

| Sujet             | Description                                               |
| ----------------- | --------------------------------------------------------- |
| 🎯 Objectif       | Accéder à une référence DOM ou stocker une valeur mutable |
| 🔧 Cas d’usage    | Focus, scroll, timers, drag&drop, valeurs persistantes    |
| ⚠️ Attention      | Ne pas utiliser pour gérer l’état déclenchant un rendu    |
| 🧭 Étape suivante | Mémorisation de calculs avec `useMemo`                    |
