// Extensibilité

// ajouter des clés / valeurs
console.log(Math.sum); // undefined

Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// modifier des clés / valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// supprimer des clés / valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// Mauvaise pratique d'étendre d'autres objets que les notres
// Math, document, process

// 2 opérateurs pour accéder aux clés :
// .
console.log(Math.sum); // undefined

// [] (plus dynamique)
const method = 'LOG';
console[method.toLowerCase()](Math['sum']); // undefined

// 2 syntaxes pour créer des objets (ES3)

// object literal
// -> on crée l'objet directement
// Use case :
// - pour les objets simple à créer et SANS méthodes
// - pour les objets instanciés une seule fois
const coordsA = {
  x: 1,
  y: 2,
};

const coordsB = {
  x: 2,
  y: 3,
};

const MyMath = {
  sum: (a, b) => Number(a) + Number(b),
};

// factory function
// Use case
// - pour les objets compliqué à créer, muti-instanciés et SANS méthodes
function createContact(name) {
  return {
    name: name,
    hello: function () {
      return 'Hello my name is ' + this.name;
    },
  };
}
const nathan = createContact('Nathan');
const anthony = createContact('Anthony');
console.log(nathan.name); // Nathan
console.log(nathan.hello()); // Hello my name is Nathan
console.log(anthony.hello()); // Hello my name is Anthony
console.log(nathan.hello === anthony.hello); // false (2 fonctions en mémoire)

// constructor function
// -> on crée l'objet via une fonction et le mot clé new
// Use case
// - pour les objets compliqué à créer et/ou AVEC méthodes
// - pour des objets multi-instance avec des méthodes
function Contact(name) {
  this.name = name;
}

Contact.prototype.hello = function () {
  return 'Hello my name is ' + this.name;
};

const romain = new Contact('Romain');
const julien = new Contact('Julien');
console.log(typeof romain); // object
console.log(romain.name); // Romain
console.log(romain.hello === julien.hello); // true (1 fonction en mémoire)