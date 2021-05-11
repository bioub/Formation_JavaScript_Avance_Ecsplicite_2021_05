const nb1 = 1;
let nb2 = nb1;
nb2 = 2;

console.log(nb1); // 1

// const nb1 = 1   -> alloc (adresse mémoire 1234) [1]
// const nb2 = nb1 -> alloc (adresse mémoire 3456) [1]
// nb2 = 2; -> (adresse mémoire 3456) [2]
// console.log(nb1); // read (adresse mémoire 1234) [1]

const obj1 = { nb: 1 };
// const obj1 -> alloc (adresse mémoire 5432) [6543]
// { nb: 1 } -> alloc (adresse mémoire 6543) [{ nb: 1 }]
const obj2 = obj1; // -> alloc (adresse mémoire 9087) [6543]
obj2.nb = 2; // read (adresse mémoire 9087) [6543] -> [{ nb: 2 }]

console.log(obj1.nb); // 2 // read (adresse mémoire 9087) [6543] -> [{ nb: 2 }]

const array1 = [1];
const array2 = array1;

array2[0] = 2;
console.log(array1[0]); // 2
