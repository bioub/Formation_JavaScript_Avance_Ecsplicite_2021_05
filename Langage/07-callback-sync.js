// Callback synchrone
// Langage JS : Array apparus en ES5 (vers 2009)

// Permettre de faire de la programmation fonctionnelle

// Remplacer des boucles / if... (programmation impérative) par des fonctions

const prenoms = ['Romain', 'Anthony', 'Nathan', 'Julien'];

// Algo doit afficher en majuscule les prénoms de 6 lettres

// Programmation impérative (ES3)
var prenoms6lettresEnMaj1 = [];
for (var i = 0; i < prenoms.length; i++) {
  var prenom = prenoms[i];

  if (prenom.length === 6) {
    var prenom6lettres = prenom;
    var prenom6lettresEnMaj = prenom6lettres.toUpperCase();

    prenoms6lettresEnMaj1.push(prenom6lettresEnMaj);
  }
}

for (var i = 0; i < prenoms6lettresEnMaj1.length; i++) {
  console.log(prenoms6lettresEnMaj1[i]);
}

// Programmation fonctionnelle (à partir de ES5)
// forEach, map, filter, reduce, reduceRight, find, findIndex...
const prenoms6lettresEnMaj2 = prenoms
  .filter((prenom) => prenom.length === 6)
  .map((prenom6lettres) => prenom6lettres.toUpperCase());

prenoms6lettresEnMaj2.forEach((p) => console.log(p));

console.log('FIN');

// pile d'appel
// ^
// |                    up   up   up   lg   lg   lg
// |=> - => - => - =>   => - => - =>   => - => - =>
// |filter            - map          - forEach      - lg
// +-----------------------------------------------------> temps
//                                     ROM  NAT  JUL  FIN
