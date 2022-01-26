"use strict";
exports.__esModule = true;
function dernierElement(tableau) {
    return tableau[tableau.length - 1];
}
var tableauDeNombres = [1, 2, 3];
var tableauDeChaines = ["un", "deux", "trois"];
var dernierNombre = dernierElement(tableauDeNombres);
var derniereChaine = dernierElement(tableauDeChaines);
function premierElement(tableau) {
    return tableau[0];
}
var premierNombre = premierElement(tableauDeNombres); // de type any
exports["default"] = {};
