// Mot-clé var

/*
  - "var" a une portée de fonction :
    - soit une variable est définie dans le contexte global, auquel cas elle est accessible partout
    - soit une variable est définie à l'intérieur d'une function, auquel cas elle est "locale" à la fonction
  - les variables déclarées avec "var" sont hissées ("hoisted");
  - redéclaration autorisée
*/

var couleur = "bleu ciel"; // portée globale
var couleur = "rouge";

function obtenirCouleur() {
  var couleur = "rouge foncé"; // portée locale
  return couleur;
}

console.log(obtenirCouleur()); // "rouge foncé"
console.log(couleur); // "bleu ciel"

/*
  hoisting "hissage / remontée"
*/

function obtenirCouleur2() {
  console.log(couleur); // undefined
  var couleur = "rose pâle";
  return couleur;
}

// C'est comme si JavaScript interprétait notre code comme suit :
function obtenirCouleur2EXPLICATION() {
  var couleur; // initialisée par défaut à undefined, logique !
  console.log(couleur); // undefined
  couleur = "rose pâle";
  return couleur;
}

console.log(obtenirCouleur2());

/*
  Le mot-clé "let" :
  - portée bloc : if...else, for, while, try...catch, switch
    - déclarée dans le contexte globale, ma variable est globale
    - déclarée dans une fonction, ma variable est accessible partout à l'intérieur de ma fonction
    - déclarée dans un bloc, ma variable est limitée à ce bloc
  - pas de "hoisting" (pas de hissage des déclarations)
  - pas de redéclaration possible
*/

let maVariableGlobale = "coucou"; // variable globale

function obtenirCouleur3(sombre) {
  console.log("couleur3", couleur3);
  let couleur3;
  if (sombre) {
    couleur3 = "noir";
  } else {
    couleur3 = "blanc";
  }
  return couleur3;
}

console.log(
  "🚀 ~ file: 01-let_const.js ~ line 57 ~ obtenirCouleur3()",
  obtenirCouleur3(true)
);

/*
  Le mot-clé "const" :
  - tout pareil que "let"
  - ...sauf qu'une variable déclarée avec const ne peut pas être réassignée
*/

// ATTENTION, réassignation interdite
const nombreDeJoueurs = 8;
nombreDeJoueurs = 4;

// ...ici, on a le droit de modifier une propriété d'un objet déclaré avec const (la référence à l'objet est conservée).
const jeu = {
  nombreDeJoueurs: 8,
};
jeu.nombreDeJoueurs = 16;

// CONSEIL PRATIQUE :
// Toujours déclarer les variables avec "const" par défaut SAUF si la valeur de la variable est amenée à changer.
