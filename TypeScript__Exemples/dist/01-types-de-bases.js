"use strict";
exports.__esModule = true;
var gameOver = false;
var texte = "TypeScript";
var score = 30;
var undef = undefined;
var nulle = null;
// any
// FORTEMENT DECONSEILLE
var quelqueChoseDeChangeant = 4; // variable de n'importe quel type
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
    console.log("Bonjour à tous !");
}
function nombreAleatoire() {
    return Math.random();
}
var addition = function (a, b) { return a + b; };
// never
function neJamaisRetourner() {
    throw new Error("je fais tout planter");
}
// Unions de types (union types)
var booleenOuNombre = 4;
booleenOuNombre = false;
booleenOuNombre = "autre chose..."; // Incompatible avec boolean | number
exports["default"] = {};
