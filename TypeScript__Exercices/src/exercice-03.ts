const salutation: string = 'Bonjour';
console.log(salutation);

const nombreA: number = 10;
const nombreB: number = 4.52;
const produit = (nombreA: number , nombreB: number): number => {
    return nombreA * nombreB
};
console.log(produit);

let reponse: number;
reponse = 42;
console.log('La réponse est : ' + reponse);

let choix: boolean = false;
choix = true;
if (choix) {
    console.log('choix vaut VRAI');
}