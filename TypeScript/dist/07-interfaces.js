"use strict";
exports.__esModule = true;
var arbre1 = {
    essence: "chêne",
    taille: 12,
    caracteristiques: ["vert", "Europe", "sempervirent"],
    faune: {
        oiseaux: ["pie", "rouge-gorge", "merle"]
    },
    pousser: function (metres) {
        this.taille += metres;
        return this.taille;
    },
    photosynthese: function () {
        return true;
    },
    scier: function () {
        console.log("zzzzzz crac boom");
    }
};
var arbre2 = {
    essence: "chêne",
    taille: 12,
    caracteristiques: ["vert", "Europe", "sempervirent"],
    faune: {
        oiseaux: ["pie", "rouge-gorge", "merle"]
    },
    pousser: function (metres) {
        this.taille += metres;
        return this.taille;
    },
    photosynthese: function () {
        return true;
    },
    scier: function () {
        console.log("zzzzzz crac boom");
    }
};
exports["default"] = {};
