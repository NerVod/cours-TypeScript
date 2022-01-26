/**
 * Décomposition (destructuring)
 */

// 1. Affectation par décomposition (destructuring assignment)

// Tableaux

// ES5
const tableau = [10, 20, 30, [40, 50], "poisson", "frites", "légumes"];

(function () {
  const nombre1 = tableau[0]; // 10
  const nombre2 = tableau[1]; // 20
  const nombre3 = tableau[2]; // 30
  const nombre4 = tableau[3][0]; // 40
  const nombre5 = tableau[3][1]; // 40
  const menuMidi = tableau.slice(4); // ["poisson", "frites", "légumes"]

  console.log(nombre1);
  console.log(nombre2);
  console.log(nombre3);
  console.log(nombre4);
  console.log(nombre5);
  console.log(menuMidi);
})();

// ES6 en plusieurs étapes
(function () {
  const [nombre1, nombre2, nombre3] = tableau;
  const [, , , [nombre4, nombre5]] = tableau;
  const [, , , , ...menuMidi] = tableau; // le reste va toujours à la fin

  console.log(nombre1);
  console.log(nombre2);
  console.log(nombre3);
  console.log(nombre4);
  console.log(nombre5);
  console.log(menuMidi);
})();

// ES6 en 1 étape
(function () {
  const [nombre1, nombre2, nombre3, [nombre4, nombre5], ...menuMidi] = tableau;

  console.log(nombre1);
  console.log(nombre2);
  console.log(nombre3);
  console.log(nombre4);
  console.log(nombre5);
  console.log(menuMidi);
})();

// Objets

const objet = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
  e: true,
  f: true,
  g: false,
  nom: "Garfield",
};

// ES6
(function () {
  const {
    b,
    a,
    nom: nomDeChat,
    c: { d },
    c,
    ...booleens // le reste va toujours à la fin
  } = objet;
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
  console.log("nomDeChat", nomDeChat);
  console.log("booleens", booleens);
})();

// ES5
(function () {
  const a = objet.a;
  const b = objet.b;
  const c = objet.c;
  const d = objet.c.d;
  const nomDeChat = objet.nom;
})();

// 2. Syntaxe de décomposition

// arguments de fonctions

const additionner = (a, b) => a + b;
const nombres = [10, 20];

additionner(nombres[0], nombres[1]);
additionner(...nombres); // équivalent à additionner(10, 20)

// tableaux

const nombresInferieursA5 = [1, 2, 3, 4];
const nombresSuperieursA5 = [6, 7, 8];

// ES6
(function () {
  const tableauFinal = [
    0,
    ...nombresInferieursA5,
    5,
    ...nombresSuperieursA5,
    9,
    10,
  ];
})();
// ES5
(function () {
  const tableauFinal = [0]
    .concat(nombresInferieursA5)
    .concat([5])
    .concat(nombresSuperieursA5)
    .concat([9, 10]);
})();

// Objets

const superpouvoirs = {
  voler: true,
  yeuxLaser: true,
  collantsRouge: true,
};

// ES6
const superman = {
  nom: "Kent",
  prenom: "Clark",
  ...superpouvoirs,
};

// Equivalent ES5
for (let nomDeSuperpouvoir in superpouvoirs) {
  superman[nomDeSuperpouvoir] = superpouvoirs[nomDeSuperpouvoir];
}

console.log(superman);
