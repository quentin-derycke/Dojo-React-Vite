// Composants et props:
// Les composants sont la base de React. Ils peuvent être fonctionnels (simples fonctions retournant du JSX) ou de classe (ancienne approche avant les hooks)

// Composants Fonctionnel
function Greeting(props) {
  return <h1>Bonjour, {props.name}!</h1>;
}

// Utilisation
<Greeting name="Alice" />;

