function randomTimeout(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, Math.floor(Math.random() * 1000));
  });
}

// Ici E en premier mais A B C D ???? -> aléatoire
// randomTimeout('A').then((letter) => console.log(letter));
// randomTimeout('B').then((letter) => console.log(letter));
// randomTimeout('C').then((letter) => console.log(letter));
// randomTimeout('D').then((letter) => console.log(letter));

// console.log('E');

// Ici A B C D E, mais les appels sont en série
// on appelle randomTimeout('B') une fois que
// randomTimeout('A') a terminé...
// (async function() {
//   const a = await randomTimeout('A');
//   console.log(a);
//   const b = await randomTimeout('B');
//   console.log(b);
//   const c = await randomTimeout('C');
//   console.log(c);
//   const d = await randomTimeout('D');
//   console.log(d);

//   console.log('E');
// })();

// on passe un tableau de promesse
// qui vont s'exécuter en même temps (appels en parallèle)
// Promise.all combine les n promisses (ici 4 promesses)
// en une seule
// -> le cb du .then combiné sera appelé quand la dernière promesse
// sera résolue
console.time('duree .then');
Promise.all([
  randomTimeout('A'),
  randomTimeout('B'),
  randomTimeout('C'),
  randomTimeout('D'),
]).then((letters) => {
  console.timeEnd('duree .then');
  // letters est un tableau
  // dans l'ordre du tableau de promesses (celui passé à Promise.all)
  // et non l'ordre des resolve
  console.log(letters); // [ 'A', 'B', 'C', 'D' ]
});

(async () => {
  console.time('duree async');
  const letters = await Promise.all([
    randomTimeout('A'),
    randomTimeout('B'),
    randomTimeout('C'),
    randomTimeout('D'),
  ]);
  console.timeEnd('duree async');
  // letters est un tableau
  // dans l'ordre du tableau de promesses (celui passé à Promise.all)
  // et non l'ordre des resolve
  console.log(letters); // [ 'A', 'B', 'C', 'D' ]
})();
