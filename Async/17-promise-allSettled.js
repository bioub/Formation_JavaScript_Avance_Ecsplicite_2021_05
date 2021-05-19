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
      if (url === '/api/todos') {
        return reject(new Error('server error'));
      }
      resolve({url, data: 'ABC'});
    }, Math.floor(Math.random() * 1000));
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
// combine
// et recupere tous les resultats en error ou pas
// Promise.all s'arreterait en cas d'erreur sur 1 requete
Promise.allSettled([
  fakeRequest('/api/users'),
  fakeRequest('/api/todos'),
  fakeRequest('/api/companies'),
]).then((responses) => {
  console.timeEnd('duree');
  console.log(responses);
}).catch((err) => {
  console.log(err);
});
