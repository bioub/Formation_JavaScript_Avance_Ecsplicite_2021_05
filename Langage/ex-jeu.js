// Enoncé p 67
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// La question est posée de manière synchrone
// La réponse est attendue de manière asynchrone
rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi ' + answer);
    
    // pour quitter
    rl.close();
});