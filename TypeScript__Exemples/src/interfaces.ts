export interface Arbre {
  essence?: string; // Propriété optionnelle
  readonly taille: number;
  caracteristiques: string[];
  faune: {
    [propriete: string]: string[];
  };
  pousser: (metres: number) => number;
  photosynthese: () => boolean;
  scier: () => void;
}
