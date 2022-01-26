const arbre: {
  essence: string;
  taille: number;
  caracteristiques: string[];
  faune: {
    oiseaux: string[];
  };
  pousser: (metres: number) => number;
  photosynthese: () => boolean;
  scier: () => void;
} = {
  essence: "chêne",
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
