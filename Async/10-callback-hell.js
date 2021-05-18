const fs = require('fs');

// Version synchrone
// - bloque le thread (tant que le fichier n'a été lu)
// - les données (s'il y en a) sont reçu en valeur de retour
try {
  const data = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', data);
  console.log('Copy Done');
} catch (err) {
  console.log(err);
}

// Version asynchrone basée sur des callbacks
// - non bloquante
// - les données (s'il y en a) -> 2e param du callback
fs.readFile('.prettierrc', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.prettierrc', data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Done');
      }
    });
  }
});

// Version asynchrone basée sur des promesses
// - non bloquante
// - les données (s'il y en a) -> 1er param du callback du then
// fs.promises
//   .readFile('.prettierrc')
//   .then((data) => {
//     fs.promises.writeFile('.prettierrc.copy', data)
//       .then(() => console.log('Copy Done'))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// Promise est un API (classe) apparu en ES2015
// avant 2015 on utilisait des bibliothèques : bluebird, q...
fs.promises
  .readFile('.prettierrc')
  .then((data) => fs.promises.writeFile('.prettierrc.copy', data))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

(async function () {
  try {
    console.log('1');
    const data = await fs.promises.readFile('.prettierrc');
    console.log('3 (prochain passage de l event loop)');
    await fs.promises.writeFile('.prettierrc.copy', data);
    console.log('4 (prochain passage de l event loop)');
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
})();

console.log('2');
