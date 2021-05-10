setTimeout(() => console.log('A'), 1000);
setTimeout(() => console.log('B'), 500); 
setTimeout(() => console.log('C'), 0); 
setTimeout(() => console.log('D'), 500); 

console.log('E');

// E C B D A

// pile d'appels (thread principal)
// ^
// |
// |
// |st - st - st - st - lg ..⟳..  cbC ..⟳..     cbB - cbD ..⟳..     cbA
// 0-------------------------------7ms-----------500ms----------------1000ms-------> temps
//                      E          C             B      D             A

// boucle d'événement / event loop (côté C++)
// do {
//    executeJs()
// } while(waitForMacroTask());

// file d'attente (0ms) : cbC
// file d'attente (7ms) : 
// file d'attente (499ms) : cbB - cbD
// file d'attente (500ms) : cbD
// file d'attente (501ms) : 
// file d'attente (999ms) : cbA
// file d'attente (1000ms) : 

// In the loop : Jake Archibald (JSConf Asia 2018)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
