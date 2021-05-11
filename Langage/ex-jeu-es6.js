const Random = {
  get() {
    return Math.random();
  },

  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

    // Object.assign(this, {min: 0, max: 100}, options);

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getInt(min, max);
    this.essais = [];
  }
  jouer() {
    console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}...`);
    this.rl.question('Quel est le nombre entier ? ', (answer) => {
      console.log('Vous avez saisi ' + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

const game = new Jeu({
  max: 20,
});
game.jouer();
