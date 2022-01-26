// Enums
var directions = {
    haut: 0,
    droite: 1,
    bas: 2,
    gauche: 3
};
var personnage = {
    direction: directions.haut
};
var etatDuJeu = {
    pause: 0,
    running: 1
};
console.log(personnage.direction); // 0 -> "haut"
(function () {
    var mouvement;
    (function (mouvement) {
        mouvement[mouvement["haut"] = 0] = "haut";
        mouvement[mouvement["droite"] = 1] = "droite";
        mouvement[mouvement["bas"] = 2] = "bas";
        mouvement[mouvement["gauche"] = 3] = "gauche";
    })(mouvement || (mouvement = {}));
    console.log("🚀 ~ file: 04-enums.ts ~ line 37 ~ mouvement", mouvement);
    personnage.direction = mouvement.gauche;
    console.log(personnage.direction);
    console.log(mouvement[0]);
    console.log(mouvement[1]);
    console.log(mouvement[2]);
    console.log(mouvement[3]);
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
    console.log("haut", mouvement.haut);
    console.log("droite", mouvement.droite);
    console.log("bas", mouvement.bas);
    console.log("gauche", mouvement.gauche);
    console.log(mouvement[40]);
    console.log(mouvement[41]);
    console.log(mouvement[60]);
    console.log(mouvement[61]);
    // Nom de propriété invalide ?
    // - commence par un nombre : "1hello"
    // - contient des espaces : "en haut à droite"
    // - contient des caractères interdits : -,;:!?
    // Valide
    // - caractères accentués
    // - _$
    // - nombre ailleurs qu'au début
})();
(function () {
    var mouvement;
    (function (mouvement) {
        mouvement["haut"] = "UP";
        mouvement["bas"] = "DOWN";
        mouvement[mouvement["gauche"] = 0] = "gauche";
        mouvement[mouvement["droite"] = 1] = "droite";
    })(mouvement || (mouvement = {}));
    console.log("🚀 ~ file: 04-enums.ts ~ line 77 ~ mouvement", mouvement);
})();
