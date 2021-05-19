
function interval(delayMs) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      console.log('cb');
      resolve();
    }, delayMs);
  });
}

interval(1000).then(() => console.log('1s'));

// setTimeout OK -> setInterval KO
// ajax OK -> WebSocket KO
// readFile OK -> readFileLineByLine KO
// btnEl.addEventListener('click') KO
