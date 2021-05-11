globalThis.globalScope = 'globalScope';

// Dans Node.js ou dans le browser avec type="module"
const moduleScope = 'moduleScope';

function externe() {
  const closureScope = 'closureScope';
  function interne() {
    const localScope = 'localScope';
    console.log(localScope);
    console.log(closureScope);
    console.log(moduleScope);
    console.log(globalScope);
  }
  interne();
}

externe();

// pile d'appel
// ^
// |
// |interne
// |externe
// +-------------------> temps
