const fs = require('fs');

// Version synchrone
// - bloque le thread (tant que le fichier n'a été lu)
// - les données (s'il y en a) sont reçu en valeur de retour
try {
  try {
    fs.accessSync('tmp');
  } catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync('tmp');
    } else {
      throw err;
    }
  }

  const data = fs.readFileSync('.prettierrc');
  fs.writeFileSync('tmp/.prettierrc.copy', data);
  console.log('Copy Done');
} catch (err) {
  console.log(err);
}

// Callback Hell / Pyramid of Doom
fs.access('tmp', (err) => {
  if (err && err.code === 'ENOENT') {
    fs.mkdir('tmp', (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } else if (err) {
    console.log(err);
  } else {
    next();
  }
});

function next() {
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
}

// Version asynchrone basée sur des promesses
// - non bloquante
// - les données (s'il y en a) -> 1er param du callback du then
fs.promises
  .access('tmp')
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.promises.mkdir('tmp');
    } else {
      throw err;
    }
  })
  .then(() => fs.promises.readFile('.prettierrc'))
  .then((data) => fs.promises.writeFile('tmp/.prettierrc.copy', data))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

(async function () {
  try {
    try {
      await fs.promises.access('tmp');
    } catch (err) {
      if (err.code === 'ENOENT') {
        await fs.promises.mkdir('tmp');
      } else {
        throw err;
      }
    }

    const data = await fs.promises.readFile('.prettierrc');
    await fs.promises.writeFile('tmp/.prettierrc.copy', data);
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
})();
