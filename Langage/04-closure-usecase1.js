for (var i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// A : ..1s.. 1 2 3
// B : ..1s.. 1 ..1s.. 2 ..1s.. 3
// -> C : ..1s.. 3 3 3

// pile d'appel
// ^
// |
// |                                          lg     lg     lg
// |for { i=0 i=1 i=2 } i=3 ........1s....... func() func() func()
// +--------------------------------------------------------------> temps
//                                            3      3      3

function externe(msg) {
    return function() {
        console.log(msg);
    }
}

for (var i=0; i<3; i++) {
    setTimeout(externe(i), 1000);
}

// ..1s.. 0 1 2

for (let i=0; i<3; i++) {
    // portée de block / closure
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// ..1s.. 0 1 2