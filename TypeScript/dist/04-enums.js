"use strict";
// Enums
Object.defineProperty(exports, "__esModule", { value: true });
var directions = {
    haut: 0,
    droite: 1,
    bas: 2,
    gauche: 3
};
var personnage = {
    direction: directions.haut,
};
var etatDuJeu = {
    pause: 0,
    running: 1,
};
console.log(personnage.direction); // 0-> "haut"
(function () {
    var mouvement;
    (function (mouvement) {
        mouvement[mouvement["haut"] = 0] = "haut";
        mouvement[mouvement["droite"] = 1] = "droite";
        mouvement[mouvement["bas"] = 2] = "bas";
        mouvement[mouvement["gauche"] = 3] = "gauche";
    })(mouvement || (mouvement = {}));
    personnage.direction = mouvement.gauche;
    console.log(personnage.direction);
})();
(function () {
    var mouvement;
    (function (mouvement) {
        mouvement[mouvement["haut"] = 40] = "haut";
        mouvement[mouvement["droite"] = 41] = "droite";
        mouvement[mouvement["bas"] = 60] = "bas";
        mouvement[mouvement["gauche"] = 61] = "gauche";
    })(mouvement || (mouvement = {}));
    personnage.direction = mouvement.gauche;
    console.log(personnage.direction);
    console.log(mouvement["haut"]); // voir noms valides de propriétés ci-dessous
    console.log(mouvement.droite);
    console.log(mouvement.bas);
    console.log(mouvement.gauche);
    console.log(mouvement[40]);
    console.log(mouvement[41]);
    console.log(mouvement[60]);
    console.log(mouvement[61]);
})();
// noms de propriétés invalide ? 
// -- commence par un nombre : 1Hello
// ne peut etre appelé 
//mouvement.1Hello :
// mais avec : mouvement["1Hello"]
// --contient des espaces
// contient des caract-res interdits : -,;:!?
// noms valides :
// --  caractères accentués
//  -- _$
// -- nombre ailleurs qu'au début
(function () {
    var mouvement;
    (function (mouvement) {
        mouvement["haut"] = "UP";
        mouvement["droite"] = "RIGHT";
        mouvement[mouvement["bas"] = 1] = "bas";
        mouvement[mouvement["gauche"] = 2] = "gauche";
    })(mouvement || (mouvement = {}));
})();
exports.default = {};
