const gameOver: boolean = false;
const texte: string = "TypeScript";
const score: number = 30;
const undef: undefined = undefined;
const nulle: null = null;

// any
// FORTEMENT DECONSEILLE
let quelqueChoseDeChangeant: any = 4; // variable de n'importe quel type
quelqueChoseDeChangeant = true;
quelqueChoseDeChangeant = window;

// unknown
let peutEtre: unknown;
fetch("une url")
  .then((response) => response.blob())
  .then((blob) => {
    peutEtre = blob;

    if (typeof peutEtre === "string") {
      let unTexte: string = peutEtre;
    }
    if (typeof peutEtre === "number") {
      peutEtre;
    }
  });

// void
function saluerLesGens(): void {
  console.log("Bonjour à tous !");
}

function nombreAleatoire(): number {
  return Math.random();
}

const addition = (a, b): number => a + b;

// never
function neJamaisRetourner(): never {
  throw new Error("je fais tout planter");
}

// Unions de types (union types)
let booleenOuNombre: boolean | number = 4;
booleenOuNombre = false;
booleenOuNombre = "autre chose..."; // Incompatible avec boolean | number

export default {};
