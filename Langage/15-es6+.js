// REST Params sur une fonction
// Conversion syntaxique : une liste de valeur -> tableau
// ici : 3, 4 -> [3, 4]
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD Operator
// Conversion syntaxique : tableau -> une liste de valeur
// ici : [3, 4] -> 3, 4
function multiply(a, b) {
  return a * b;
}

const nbs = [3, 4];
console.log(multiply(...nbs));

// ...nbs = 3, 4 -> REST
// a, b = ...nbs -> SPREAD

// version moderne d'un clone de tableau
const cloneArray = [...nbs]; // [nbs[0], nbs[1]]

// Destructurer un tableau
// const trois = nbs[0];
// const quatre = nbs[1];

//    [3    , 4     ]
const [trois, quatre] = nbs;
const [prenom, nom] = 'Romain Bohdanowicz'.split(' ');

// le nbs[1] est ignoré
// five reçoit nbs[2] s'il existe ou 5 (default param)
const [three, , five = 5] = nbs;

// REST Params sur un tableau
const values = ['A', 'B', 'C', 'D', 'E', 'F'];
const [letterA, ...letters] = values;
console.log(letters); // [ 'B', 'C', 'D', 'E', 'F' ]

// Object Destructuring
const coords = { x: 1, y: 2 };

//    {x: 1   , y: 2   }
// const {x: varX, y: varY} = coords;
// console.log(varX, varY); // 1, 2

// combiner avec default params
const { x: varX, y: varY, z: varZ = 3 } = coords;
console.log(varX, varY, varZ); // 1, 2, 3

// Shorthand property
const firstName = 'Romain';
// const contact = {
//   firstName: firstName
// };
const contact = {
  firstName,
};

// combiner avec shorthand property
//    {x: 1, y: 2   }
const { x, y, z = 3 } = coords;
// -> intéressant pour options

// class

// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function () {
//   return 'Hello my name is ' + this.name;
// };

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return 'Hello my name is ' + this.name;
  }
}


console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

// SPREAD Object
// Conversion syntaxique : object -> liste de clés/valeurs
// ici : {x: 1, y: 2} -> x: 1, y: 2
const coords3d = { ...coords, z: 4};

// REST Object
// Conversion syntaxique : liste de clés/valeurs -> object
const {z, ...coords2d} = coords3d;
console.log(coords2d.x); // 1
console.log(coords2d.y); // 2

// 
