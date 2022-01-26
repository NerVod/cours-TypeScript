"use strict";
exports.__esModule = true;
var arbre1 = {
    essence: "chêne",
    taille: 12,
    caracteristiques: ["vert", "Europe", "sempervirent"],
    faune: {
        oiseaux: ["pie", "rouge-gorge", "merle"],
        mammiferes: ["blaireau", "sanglier"],
        reptiles: ["lézard", "salamandre"]
    },
    pousser: function (metres) {
        this.taille += metres;
        return this.taille;
    },
    photosynthese: function () {
        return true;
    },
    scier: function () {
        console.log("zzzzzzz crac boom");
    }
};
arbre1.taille = 20; // propriété readonly ne peut pas changer de valeur
var arbre2 = {
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
        console.log("zzzzzzz crac boom");
    }
};
var foret = [arbre1, arbre2];
