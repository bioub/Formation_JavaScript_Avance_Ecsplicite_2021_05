const assert = require('assert');
const Logger = require('./logger');
const fs = require('fs');

const logger = new Logger('fictive.log');

(async function () {
  fs.promises.appendFile = () => {
    // return new Promise((resolve) => {
    //   resolve();
    // })
    return Promise.resolve();
  }

  try {
    await logger.log('Ligne 1');
    console.log('SUCCESS : fs.promises.appendFile is ok, logger.log is OK');
  } catch (err) {
    console.log('ERROR : fs.promises.appendFile is ok, logger.log is OK');
  }

  fs.promises.appendFile = () => {
    // return new Promise((resolve, reject) => {
    //   reject(new Error('fake error'));
    // })
    return Promise.reject(new Error('fake error'))
  }

  try {
    await logger.log('Ligne 1');
    console.log('ERROR : fs.promises.appendFile is error, logger.log is error');
  } catch (err) {
    console.log(
      'SUCCESS : fs.promises.appendFile is error, logger.log is error',
    );
  }
})();
