// class Jeu {
//   // propriétés dans une classe
//   essais = [];

//   jouer() {

//   }
// }

class Jeu {
  // propriétés dans une classe (# pour private)
  #essais = [];
  entierAlea = 24;

  jouer() { // -> défini dans le prototype
    console.log(this.#essais);
  }
}

