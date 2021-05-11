const Random = {
  get: function () {
    return Math.random();
  },

  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

function Jeu(options) {
  options = options || {};
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
  console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
  this.rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi ' + answer);

    const entierSaisi = parseInt(answer, 10);

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
