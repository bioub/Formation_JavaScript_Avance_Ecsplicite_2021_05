function externe(msg) {
  function interne() {
    console.log(msg);
  }

  return interne;
}

const interneFromExterne = externe('Hello');
interneFromExterne();

// pile d'appel
// ^
// |
// |
// |externe - interne
// +-------------------> temps
