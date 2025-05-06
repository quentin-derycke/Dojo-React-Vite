// Avant en classe component:
// - `componentDidMount()` → Appelé après le premier rendu.
// - `componentDidUpdate()` → Appelé après une mise à jour.
// - `componentWillUnmount()` → Appelé avant la suppression du composant.

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Composant monté !');
  }

  componentDidUpdate() {
    console.log('Mise à jour !');
  }

  componentWillUnmount() {
    console.log('Composant supprimé !');
  }

  render() {
    return (
      <div>
        <p>Compteur : {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

// Compteur avec composant de classe
// Equivalent avec les hook UseState et UseEffect
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Composant monté !');
    return () => {
      console.log('Composant supprimé !');
    };
  }, []); // [] signifie que cet effet ne s'exécute qu'au montage/démontage

  useEffect(() => {
    console.log('Mise à jour du compteur !');
  }, [count]); // Cet effet s'exécute à chaque mise à jour de `count`

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
