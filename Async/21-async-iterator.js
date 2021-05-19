const { Observable } = require('rxjs');
const { eachValueFrom } = require('rxjs-for-await');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}

// interval(1000).subscribe(() => console.log('1s'));

// async iterator -> ES2019
(async function() {
  for await (const _ of eachValueFrom(interval(1000))) {
    console.log('1s');
  }
})();
