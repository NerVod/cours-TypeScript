/**
 * Fonctions fléchées
 */

/*
  Syntaxe :
    const maFonctionFlechee = (arg1, arg2) => {
      // instructions;
    }
    const maFonctionFlechee = arg => {
      // instructions;
    }
    const maFonctionFlechee = (arg1, arg2) => valeurDeRetour;
    const maFonctionFlechée = arg => valeurDeRetour;
    const maFonctionFlechée = () => valeurDeRetour;
*/

const additionner = (a, b) => a + b;
const carreDunNombre = (a) => a * a;
const logCouleur = (message) => {
  console.log("%c " + message, "background: red;");
};
logCouleur("Bonjour !");

window.addEventListener("click", (event) => {
  console.log(event.clientX, event.clientY);
});

const tableauDeNombres = [1, 2, 3, 4];
const tableauMultipliePar10 = tableauDeNombres.map(
  (nombreActuel) => nombreActuel * 10
);
console.log(" tableauMultipliePar10", tableauMultipliePar10);

/*
  ATTENTION le mot-clé "this" n'a pas la même signification dans une fonction classique que dans une fonction fléchée /!\
  - fonction "classique" : le mot-clé "this" prend la valeur du contexte d'EXECUTION, càd l'objet dont la fonction est une méthode (ou window dans le cas où elle n'est la méthode d'aucun objet)
  - fonction "fléchée" : le mot-clé "this" prend la valeur du contexte de DECLARATION, càd la valeur de "this" dans le contexte "directement extérieur" à l'endroit de déclaration de la fonction.
*/

// Exemple 1

console.log(this); // window
var nom = "Tom";

function sePresenter() {
  console.log(this);
  console.log("Bonjour, je m'appelle ", this.nom);
}

sePresenter(); // Bonjour, je m'appelle Tom

const chat = {
  nom: "Garfield",
  platPrefere: "lasagnes",
  sePresenter: sePresenter,
  quelEstMonPlatPrefere: () => {
    // Ici, le mot-clé "this" fait référence au contexte de déclaration de l'objet chat, càd window.
    console.log("J'adore manger des ", this.platPrefere);
  },
};

chat.sePresenter(); // Bonjour, je m'appelle Garfield
chat.quelEstMonPlatPrefere(); // J'adore manger des undefined -> platPrefere n'existe pas sur window

// Exemple 2

const methodeFlecheeBbis = () => {
  console.log("méthode fléchée bis de B", this.nom);
};

const objA = {
  nom: "objet A",
  methodeA: function () {
    console.log("méthode classique de A", this.nom);

    // this ?
    const objB = {
      nom: "objet B",
      methodeB: function () {
        console.log("méthode classique de B", this.nom);
      },
      methodeFlecheeB: () => {
        console.log("méthode fléchée de B", this.nom);
      },
      methodeFlecheeBbis: methodeFlecheeBbis,
    };
    objB.methodeB();
    objB.methodeFlecheeB();
    objB.methodeFlecheeBbis();
  },
};

objA.methodeA();
