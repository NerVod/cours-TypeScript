// ./node_modules/.bin/tsc --watch --outDir dist --target es2021 src/premier-exemple.ts


const gameOver: boolean = false;
const texte: string = "typeScript";
const score: number = 30;
const undef: undefined = undefined;
const nulle : null = null;

// any
// fortement déconseillé
let quelqueChoseDeChangeant: any = 4;
quelqueChoseDeChangeant = true;
quelqueChoseDeChangeant = window;


// unknown
let peutEtre: unknown;
fetch("une url")
    .then((response) => response.blob())
    .then((blob) => {
        peutEtre = blob;
        if(typeof peutEtre === "string"){
            const unTexte: string = peutEtre;
        }
        if(typeof peutEtre === "number"){
            peutEtre
        }

});

// void
function saluerLesGens(): void {
    console.log("Bonjourà tous !")
}

function nombreAleatoire(): number {
    return Math.random();
}
const addition = (a, b): number => a + b;


// never 
function neJamaisRetourner(): never {
    throw new Error("Je fais planter le code")
}


// Union de types (union types)
let booleenOuNombre: boolean | number = 4;
booleenOuNombre = false;
booleenOuNombre = "autre chose ..." // incompatible avec Boolean | number

// essai compilation

export default {}