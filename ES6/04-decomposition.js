/*
    Décomposition (destructuring)
*/

// 1. Affectation par décomposition (destructuring assignment)

// ES5
const tableau = [10, 20, 30, [40, 50], "poisson", "frites", "légumes"];
(function () {
    const nombre1 = tableau[0]; // 10
    const nombre2 = tableau[1]; // 20
    const nombre3 = tableau[2]; // 30
    const nombre4 = tableau[3][0]; // 40
    const nombre5 = tableau[3][1]; // 50
    const menuMidi = tableau.slice(4); // ["poisson", "frites", "légumes"]

    console.log("nombre 1 : ", nombre1)
    console.log("nombre 2 : ", nombre2)
    console.log("nombre 3 : ", nombre3)
    console.log("nombre 4 : ", nombre4)
    console.log("nombre 5 : ", nombre5)
    console.log("menu  midi : ", menuMidi)
})();

    // ES6 en plusieurs étapes
    (function () {
        const [nombre1, nombre2, nombre3] = tableau;
        const [ , , , [nombre4, nombre5]] = tableau;
        const [ , , , , ...menuMidi] = tableau;

        console.log("nombre 1 ES6 : ", nombre1)
        console.log("nombre 2 ES6 : ", nombre2)
        console.log("nombre 3 ES6: ", nombre3)
        console.log("nombre 4 ES6: ", nombre4)
        console.log("nombre 5 ES6: ", nombre5)
        console.log("menu  midi ES6: ", menuMidi)
    })();

    // ES6 en 1 étape
    const [nombre1, nombre2, nombre3, [nombre4, nombre5], ...menuMidi] = tableau;



// objets 

const objet = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    },
    e: 40,
    f: 50,
    g: 60,
    nom: "Garfield",
};

// ES6
(function() {
const 
    { a,
    b,
    c,
    c: { d },
    nom: nomDeChat,
    ...booleens // le reste va toujours à la fin
    } = objet;
console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("d" , d);
console.log("nomDeChat" , nomDeChat);
console.log("booléens " , booleens);
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

const additionner = (a, b) => a + b;

const nombres = [10, 20];
additionner(nombres[0], nombres[1]);
additionner(...nombres); // équivalent à additionner (10 , 20)

const nombresInferieursA5 = [1, 2, 3, 4];
const nombresSuperieursOuEgauxA5 = [5, 6, 7, 8];
const tableauFinal = nombresInferieursA5.concat(nombresSuperieursOuEgauxA5);
const tableauFinal2 = [ ...nombresInferieursA5, ...nombresSuperieursOuEgauxA5];
const tableauFinal3 = [0,
                        ...nombresInferieursA5,
                        ...nombresSuperieursOuEgauxA5,
                        9,
                        10
];
//en ES5
const tableauFinal3bis = [0]
    .concat(nombresInferieursA5)
    .concat(nombresSuperieursOuEgauxA5)
    .concat([9, 10]);


///////////////////// Objets ////////////////////////////

const superpouvoirs = {
    voler: true,
    yeuxlaser: true,
    collantsRouges: true,
};


// ES6
const superman = {
    nom: "Kent",
    prenom: "Clark",
    ...superpouvoirs,
};
// équivalent ES5
for(let nomDeSuperpouvoir in superpouvoirs) {
    console.log(nomDeSuperpouvoir)
    superman[superpouvoirs] = superpouvoirs[nomDeSuperpouvoir];
}
console.log(superman);