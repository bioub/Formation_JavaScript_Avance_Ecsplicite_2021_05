function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

function fakeRequest(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({url, data: 'ABC'});
    }, Math.floor(Math.random() * 10000));
  });
}

// la reponse serait reçue entre 0 et 10s
// console.time('duree');
// fakeRequest('/api/users')
//   .then((res) => {
//     console.timeEnd('duree');
//     console.log(res.data); // 'ABC';
//   });

console.time('duree');
Promise.race([
  fakeRequest('/api/users'),
  timeout(3000),
]).then((res) => {
  console.timeEnd('duree');
  if (res) {
    console.log(res.data);
  }
});
