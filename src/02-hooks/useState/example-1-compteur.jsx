import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <p className="mb-2">Count: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;

// 💡 Ici, count est une variable d’état et setCount modifie sa valeur.
// Quand on clique sur le bouton, React re-render le composant avec la nouvelle valeur
