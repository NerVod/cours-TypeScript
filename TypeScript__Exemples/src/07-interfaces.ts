import { Arbre } from "./interfaces";

const arbre1: Arbre = {
  essence: "chêne",
  taille: 12,
  caracteristiques: ["vert", "Europe", "sempervirent"],
  faune: {
    oiseaux: ["pie", "rouge-gorge", "merle"],
    mammiferes: ["blaireau", "sanglier"],
    reptiles: ["lézard", "salamandre"],
  },
  pousser(metres) {
    this.taille += metres;
    return this.taille;
  },
  photosynthese: function () {
    return true;
  },
  scier: function () {
    console.log("zzzzzzz crac boom");
  },
};

arbre1.taille = 20; // propriété readonly ne peut pas changer de valeur

const arbre2: Arbre = {
  taille: 12,
  caracteristiques: ["vert", "Europe", "sempervirent"],
  faune: {
    oiseaux: ["pie", "rouge-gorge", "merle"],
  },
  pousser(metres) {
    this.taille += metres;
    return this.taille;
  },
  photosynthese: function () {
    return true;
  },
  scier: function () {
    console.log("zzzzzzz crac boom");
  },
};

const foret: Arbre[] = [arbre1, arbre2];
