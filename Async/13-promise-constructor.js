setTimeout(() => {
  console.log('1s');
}, 1000);

function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

timeout(1000).then(() => console.log('1s'));

(async function() {
  await timeout(1000);
  console.log('1s');
})();
