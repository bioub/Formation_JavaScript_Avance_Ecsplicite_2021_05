const prenom = 'Romain'; // 2 alloc (ref + objet)

// quelque soit l'opération sur cette chaine, l'objet
// est non-modifiable

console.log(prenom[0]); // R

prenom[0] = 'M';

console.log(prenom[0]); // R

const prenomUpper = prenom.toUpperCase();
console.log(prenom); // Romain
console.log(prenomUpper); // Romain

const str1 = '1';
let str2 = str1; // passage par référence
// str2[0] = '2' -> impossible
str2 = '2'; // nouvel objet + nouvelle

console.log(str1); // '1'
