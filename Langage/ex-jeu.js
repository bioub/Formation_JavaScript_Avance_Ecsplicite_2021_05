// random
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enoncé p 67
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// La question est posée de manière synchrone
// La réponse est attendue de manière asynchrone
function loop() {
  console.log('Vous avez déjà joué : ' + essais.join(' - '));
  rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi ' + answer);

    const entierSaisi = parseInt(answer, 10);

    if (isNaN(entierSaisi)) {
      console.log('Il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      loop();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      loop();
    } else {
      console.log('Gagné');
      rl.close();
    }


  });
}


const entierAlea = getRandomInt(0, 100);
const essais = [];

loop();
