const Logger = require("./logger");

// revient dans le terminal à faire un :
// cd 14-promise-resolve-reject
process.chdir(__dirname);

const logger = new Logger('../tmp/app.log');

(async function() {
  await logger.log('Ligne 1');
  await logger.log('Ligne 2');
  await logger.log('Ligne 3');
})();

