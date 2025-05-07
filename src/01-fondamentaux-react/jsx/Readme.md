
# ⚙️ JSX vs React.createElement

## 🧠 Qu’est-ce que JSX ?

JSX (JavaScript XML) est une extension de syntaxe pour JavaScript utilisée avec React.  
Elle permet d’écrire du code qui **ressemble à du HTML**, mais qui est **transpilé en JavaScript pur** par Babel avant d’être exécuté par le navigateur.

---

## 🔁 Transformation par Babel

Le JSX est transformé par Babel en appels à `React.createElement`.

### ✅ Exemple JSX :

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

### 🔁 Transpilé en JavaScript :

```js
function Welcome() {
  return React.createElement("h1", null, "Hello, World!");
}
```

---

## 🧩 Exemple complet avec structure HTML

### ✅ JSX :

```jsx
function Card() {
  return (
    <div className="card">
      <h2>JSX in Action</h2>
      <p>This is a card component.</p>
    </div>
  );
}
```

### 🔁 Transpilé par Babel :

```js
function Card() {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement("h2", null, "JSX in Action"),
    React.createElement("p", null, "This is a card component.")
  );
}
```

---

## 🧠 Règles importantes du JSX

| Règle | Explication |
|-------|-------------|
| Une seule racine | JSX doit retourner un seul élément parent |
| `className` | On utilise `className` au lieu de `class` |
| Props camelCase | `onClick`, `tabIndex`, etc. |
| Expressions entre `{}` | `{variable}`, `{condition ? ... : ...}` |

---

## 💡 Exemple avec des expressions

### JSX :

```jsx
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}
```

### Transpilé :

```js
function Greeting(props) {
  return React.createElement(
    "h1",
    null,
    props.isLoggedIn ? "Welcome back!" : "Please sign in."
  );
}
```

---

## 🛠 Outils pour visualiser la transpilation

- [babeljs.io/repl](https://babeljs.io/repl) — un environnement pour voir en direct la transpilation
- Vite, Webpack, Create React App utilisent tous Babel automatiquement

---

## 📌 Résumé

| Concept | Détail |
|--------|--------|
| JSX | Syntaxe déclarative pour l’UI dans React |
| Transpilation | JSX → `React.createElement()` |
| Rendu final | HTML généré par React dans le DOM |
| Avantage | Code plus lisible et proche du HTML |

---

**Astuce :** Pense JSX comme une **vue déclarative** qui sera **traduite en appels JavaScript** optimisés par React.
