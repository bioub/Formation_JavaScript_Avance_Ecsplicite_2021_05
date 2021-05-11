const Random = {
  // 1 - method properties
  get: function () {
    return Math.random();
  },

  // 1 - method properties
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  // 1 - method properties
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  // 1 - method properties
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');


// 2 - class
function Jeu(options) {
  options = options || {}; // 3 - default params

  // 4 - combiner object destructuring / shorthand / default params
  const min = options.min || 0; // possible parce que 0 (la valeur par défaut) est falsy
  const max = options.max !== undefined ? options.max : 100;
  // Object.assign(this, {min: 0, max: 100}, options);

  this.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = Random.getInt(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function () {
  // 5 - template literal
  console.log('Vous avez déjà joué : ' + this.essais.join(' - ') + '...');
  this.rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi ' + answer);

    // 6 - utiliser la version de Number
    // MDN Number
    const entierSaisi = parseInt(answer, 10);

    // 6 - utiliser la version de Number
    // MDN Number
    if (isNaN(entierSaisi)) {
      console.log('Il faut saisir un nombre');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this.rl.close();
    }
  });
};

const game = new Jeu({
  max: 20,
});
game.jouer();
