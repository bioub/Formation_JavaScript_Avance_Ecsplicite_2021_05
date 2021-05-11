function shallowClone(src) {
  const copy = {};

  for (const key of Object.keys(src)) {
    copy[key] = src[key];
  }

  return copy;
}

const obj1 = { nb: 1, sub: {} };
// const obj2 = shallowClone(obj1);
const obj2 = Object.assign({}, obj1);
obj2.nb = 2;
console.log(obj1.nb); // 1

console.log(obj1 === obj2); // false (2 références distinctes)
console.log(obj1.sub === obj2.sub); // true (1 seul obj)

function deepClone(src) {
  const copy = {};

  for (const key of Object.keys(src)) {
    if (typeof src[key] === 'object') {
      copy[src] = deepClone(src[key])
    } else {
      copy[key] = src[key];
    }
  }

  return copy;
}

const objA = { nb: 1, sub: {} };
const objB = deepClone(objA);
objB.nb = 2;
console.log(objA.nb); // 1

console.log(objA === objB); // false (2 références distinctes)
console.log(objA.sub === objB.sub); // false (2 objets sub)

const array1 = [1, 2, 3];
const array2 = array1.slice(); // copy


// Version moderne du clone objet (SPREAD Object ES2018)
const cloneObj = {...obj1};
