export interface Arbre {   
    essence?: string;  // propriété optionnelle
    taille: number;
    caracteristiques: string[];
    faune: {
        [key: string]: string[];
    };
    pousser: (metres: number) => number;
    photosynthese: () => boolean;
    scier: () => void;      
}

