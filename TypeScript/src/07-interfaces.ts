
// interface Arbre {   
//     essence?: string;  // propriété optionnelle
//     taille: number;
//     caracteristiques: string[];
//     faune: {
//         oiseaux: string[];
//     };
//     pousser: (metres: number) => number;
//     photosynthese: () => boolean;
//     scier: () => void;      
//  }
// interface Arbre {   
//     essence?: string;  // propriété optionnelle
//     taille: number;
//     caracteristiques: string[];
//     faune: {
//         [key: string]: string[];
//     };
//     pousser: (metres: number) => number;
//     photosynthese: () => boolean;
//     scier: () => void;      
// }


// interface déplacée dans fiichier interface à part

import { Arbre } from "./interfaces"


const arbre1 : Arbre = {
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
    photosynthese: function() {
        return true
    },
    scier: function () {
        console.log("zzzzzz crac boom")
    }
};



const arbre2: Arbre = {
    // propriété essence en moins -> paramètre optionnel dans l'interface
    taille: 12,
    caracteristiques: ["vert", "Europe", "sempervirent"],
    faune: {
        oiseaux: ["pie", "rouge-gorge", "merle"]
    },
    pousser(metres) {
        this.taille += metres;
        return this.taille;
    }
    photosynthese: function() {
        return true
    },
    scier: function () {
        console.log("zzzzzz crac boom")
    }
}
const foret: Arbre[] = [arbre1, arbre2];


export default {}