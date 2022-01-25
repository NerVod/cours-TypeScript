/*
    Fonctions fléchées
*/

/*
    Syntaxe :

    const maFonctionFlechee = (arg1, arg2) => {
        // instructions;
    }

    const maFonctionFlechee = arg => {
        // instructions;
    }

    const maFonctionFlechee = (arg1, ar2) => valeurDeRetour

    const maFonctionFlechee = arg1  => valeurDeRetour

    const maFonctionFlechee = () => valeurDeRetour
*/

const additionner = (a, b) => a + b;
const carreDunNombre = (a) => a * a;
const logCouleur = (message) => {
    console.log("%c" + message, "background: green");
};
logCouleur('hello');

window.addEventListener("click", () => {
    console.log(event.clientX, event.clientY)
});

const tableauDeNombres = [1, 2, 3, 4];
const tableauMutipliePar10 = tableauDeNombres.map(
    (nombreActuel) => {
        return nombreActuel * 10;
    }
);
console.log("tableauMutipliePar10", tableauMutipliePar10)

/*
    ATTENTION :
    -function "classique" : le mot-clé "this" prend la valeur du contexte d'EXECUTION
    -function"fléchée" : le mot-clé "this" prend la valeur du contexte de DECLARATION
*/
// exemple 1
console.log(this); // window

var nom ="Tom"
function sePresenter() {
    console.log(this)
    console.log("Bonjour, je m'appelle ", this.nom)
};
sePresenter();

const chat = {
    nom: "Garfield",
    platPrefere : "lasagnes",
    sePresenter: sePresenter,
    quelEstMonPlatPrefere: () => {
        //Ici le mot-clé this fait référence au contexte de déclaration de l'objet chat cad window
        console.log("J'adore manger des ", this.platPrefere);
    },
}
chat.sePresenter();
chat.quelEstMonPlatPrefere();

// exemple2



const objA = {
    nom: "objet A",
    methodeA: function() {
        console.log("méthode classique de A ", this.nom); // objet A

            // this ?
        const objB = {
            nom: "objet B",
            methodeB: function () {
                console.log("méthode classique de B " , this.nom); // objet B
            },
            methodeFlecheeB: () => {
                console.log("méthode fléchée de B ", this.nom) // objet A
            },
           
        };
        objB.methodeB();
        objB.methodeFlecheeB();
        
    },
};

objA.methodeA();