const fs = require('fs');

class Logger {
  constructor(filePath) {
    this.filePath = filePath;
  }
  async log(message) {
    await fs.promises.appendFile(this.filePath, message + '\n');
  }
}

module.exports = Logger;
