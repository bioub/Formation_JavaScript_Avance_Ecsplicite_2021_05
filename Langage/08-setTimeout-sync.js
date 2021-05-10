// function setTimeout(cb, delayMs) {
//     // pause de delayMs
//     const debut = Date.now();

//     // bloquer le thread
//     while (debut + delayMs > Date.now());

//     cb();
// }

// for (var i=0; i<3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

function pause(delayMs) {
  // pause de delayMs
  const debut = Date.now();

  // bloquer le thread
  while (debut + delayMs > Date.now());
}

for (var i = 0; i < 3; i++) {
  pause(1000);
  console.log(i);
}
