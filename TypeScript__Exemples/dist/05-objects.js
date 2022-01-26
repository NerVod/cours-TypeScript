var arbre = {
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
        console.log("zzzzzzz crac boom");
    }
};
