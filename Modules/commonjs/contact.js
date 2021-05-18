// (function (exports, require, module) {
'use strict';
const chalk = require('chalk');

class Contact {
  name = 'Romain';

  hello() {
    // ce this qui est utilisé par le callback
    setTimeout(() => {
      // l'appel d'une fonction fléchée ne créé pas les pseudo-variables :
      // this, arguments, super, new.target
      console.log(this);
      console.log(chalk.blue(`Hello my name is ${this.name}`));
    }, 1000);
  }
}

exports.Contact = Contact;
// });
