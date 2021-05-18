const fs = require('fs');

// Version synchrone
// - bloque le thread (tant que le fichier n'a été lu)
// - les données (s'il y en a) sont reçu en valeur de retour
const data = fs.readFileSync('.prettierrc');
console.log(data.toString('utf-8'));

// Version asynchrone basée sur des callbacks
// - non bloquante
// - les données (s'il y en a) -> 2e param du callback
fs.readFile('.prettierrc', (err, data) => {
  console.log(data.toString('utf-8'));
});

// Version asynchrone basée sur des promesses
// - non bloquante
// - les données (s'il y en a) -> 1er param du callback du then
fs.promises.readFile('.prettierrc')
  .then((data) => console.log(data.toString('utf-8')));
