// Avec JSX
function Welcome() {
    return <h1>Hello, World!</h1>;
  }
  
 
// Babel transforme le JSX en appels explicites à :
React.createElement(type, props, ...children)

  // Version transpilé par babel
function Welcome() {
    return React.createElement("h1", null, "Hello, World!");
  }
