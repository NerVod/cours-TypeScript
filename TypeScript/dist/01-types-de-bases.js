"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameOver = false;
var texte = "typeScript";
var score = 30;
var undef = undefined;
var nulle = null;
// any
// fortement déconseillé
var quelqueChoseDeChangeant = 4;
quelqueChoseDeChangeant = true;
quelqueChoseDeChangeant = window;
// unknown
var peutEtre;
fetch("une url")
    .then(function (response) { return response.blob(); })
    .then(function (blob) {
    peutEtre = blob;
    if (typeof peutEtre === "string") {
        var unTexte = peutEtre;
    }
    if (typeof peutEtre === "number") {
        peutEtre;
    }
});
// void
function saluerLesGens() {
    console.log("Bonjourà tous !");
}
function nombreAleatoire() {
    return Math.random();
}
var addition = function (a, b) { return a + b; };
// never 
function neJamaisRetourner() {
    throw new Error("Je fais planter le code");
}
// Union de types (union types)
var booleenOuNombre = 4;
booleenOuNombre = false;
booleenOuNombre = "autre chose ..."; // incompatible avec Boolean | number
exports.default = {};
