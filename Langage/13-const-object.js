const coords = {
  x: 1,
  y: 2,
};

const nbs = [1, 2];

// ce qui est constant c'est la référence (pas l'objet)
coords.z = 3; // OK
nbs.push(3); // OK

coords = {}; // impossible
nbs = []; // impossible

// pour que l'objet soit constant
Object.freeze(coords);
coords.w = 12; // impossible (voir erreur en mode strict)
