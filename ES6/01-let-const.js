// mot clé var

/* 
portée d'une variable avec var 
-var a une portée de fonction :
-Soit une variable est définie dans le contexte
global, auquel cas elle est accessible partour
-Soit une variable est définie à l'intérieur d'une fonction, 
auquel cas elle est "locale" à la fonction
-les variables déclarées avec var sont "hissées (hoisted);
-redéclaration autorisée
*/

var couleur = "bleu ciel"; // portée globale

function obtenirCouleur() {
    var couleur = "rouge foncé" // portée locale
    return couleur
}

console.log("obtenir couleur :", obtenirCouleur()); // "rouge foncé"
console.log("log de couleur : ",couleur); //"bleu ciel"


/*
    Hoisting "hissage / remontée"
*/

function obtenirCouleur2() {
    console.log("log de couleur dans fonction obtenirCouleur2 :",couleur); //undefined
    var couleur = "rose pâle";
    return couleur;
}
console.log(obtenirCouleur2());



function obtenirCouleur2EXPLICATION() {
    var couleur; // déclaration de la variable hoistée :
    // donc variable initialisée avec valeur "undefined"
    console.log(couleur); //undefined
    couleur = "rose pâle";
    return couleur;
}
console.log(obtenirCouleur2());


/*
    le mot-clé "let" :
    - portée bloc : if...else, for, while, try...catch, switch
    -déclarée dans le contexte global, ma variable est globale
    -déclarée dans une fonction, ma variable est accessible partout à l'intérieur de la fonction
    - pas de "hoisting" ( pas de hissage des déclarations )
    - pas de redéclaration possible
*/

function obtenirCouleur3(sombre) {
    // console.log("couleur3 : ", couleur3)
    if(sombre) {
        let couleur3 = "noir";
        return couleur3
    } else {
        let couleur3 = "blanc";
        return couleur3
    }
}

console.log("log obtenir couleur3 : " , obtenirCouleur3(true));


/*
    le mot-clé const :
    -tout pareil que "let
    -... sauf qu'une variable déclarée avec const ne peut pas être réassignée"
*/


// ATTENTION réassignation interdite
const nombreDeJoueurs = 8;
nombreDeJoueurs = 4;


// ... ici on a le droit de modifier une propriété d'un objet déclaré avec const ( la référence à l'objet est conservée )
const jeu = {
    nombreDejoueurs : 8,
}
jeu.nombreDeJoueurs = 16

// Conseil pratique :
// toujours déclarer les variables avec const par défaut sauf si 
// la variable est amenée à changer