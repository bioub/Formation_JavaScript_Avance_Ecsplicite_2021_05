const fs = require('fs');

// Version synchrone
// - bloque le thread (tant que le fichier n'a été lu)
// - les données (s'il y en a) sont reçu en valeur de retour
function mkdirIfNotExistsSync(dirPath) {
  try {
    fs.accessSync(dirPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(dirPath);
    } else {
      throw err;
    }
  }
}

try {
  mkdirIfNotExistsSync('tmp');
  const data = fs.readFileSync('.prettierrc');
  fs.writeFileSync('tmp/.prettierrc.copy', data);
  console.log('Copy Done');
} catch (err) {
  console.log(err);
}

// Callback Hell / Pyramid of Doom
function mkdirIfNotExistsAsync(dirPath, cb) {
  fs.access(dirPath, (err) => {
    if (err && err.code === 'ENOENT') {
      fs.mkdir(dirPath, (err) => {
        if (err) {
          cb(err);
        } else {
          cb();
        }
      });
    } else if (err) {
      cb(err);
    } else {
      cb();
    }
  });
}

mkdirIfNotExistsAsync('tmp', (err) => {
  if (err) {
    console.log(err);
  } else {
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
});

// Version asynchrone basée sur des promesses
// - non bloquante
// - les données (s'il y en a) -> 1er param du callback du then
function mkdirIfNotExistsAsyncPromise(dirPath) {
  return fs.promises.access(dirPath).catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.promises.mkdir('tmp');
    } else {
      throw err;
    }
  });
}

mkdirIfNotExistsAsyncPromise('tmp')
  .then(() => fs.promises.readFile('.prettierrc'))
  .then((data) => fs.promises.writeFile('tmp/.prettierrc.copy', data))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

async function mkdirIfNotExistsAsyncAwait(dirPath) {
  try {
    await fs.promises.access(dirPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.promises.mkdir(dirPath);
    } else {
      throw err;
    }
  }
}

(async function () {
  try {
    await mkdirIfNotExistsAsyncAwait('tmp');
    const data = await fs.readFileSync('.prettierrc');
    await fs.writeFileSync('tmp/.prettierrc.copy', data);
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
})();



