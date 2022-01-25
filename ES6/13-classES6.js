class Cercle {
    constructor(x, y, rayon) {
        this.x = x;
        this.y = y;
        this.rayon = rayon;
    }

    static itiliteDeMaClasse = "Permet de créer des cercles";

    static distanceEntre(c1, c2) {
        return Math.sqrt(Math.pow(c2.x - c1.x, 2) + Math.pow(c2.y - c1.y, 2));
    }


    deplacer(deltaX, deltaY) {
        this.x += deltaX;
        this.y += deltaY;
    }

    afficherInfo() {
        console.log(
    "Je suis un cercle de centre (" +
        this.x +
        ", " +
        this.y +
        ") et de rayon "+
        this.rayon
        )
    }
}


const cercle1 = new Cercle(0, 0, 10);
const cercle2 = new Cercle(2, 0, 10);
cercle1.afficherInfo();
cercle2.afficherInfo();
cercle2.deplacer(3, 0);
cercle2.afficherInfo();
console.log(Cercle.distanceEntre(cercle1, cercle2))
 
// spécialisation de classe
class CercleUnitaire extends Cercle {
    constructor(x, y) {
        super(x, y, 1) // super correspond au constructeur de la classe étendue
    }
}

const cercleUnitaire = new CercleUnitaire(2, 3);
cercleUnitaire.afficherInfo();


// enrichissement de classe
class CercleUnitaireDeCouleur extends CercleUnitaire {
    constructor(x, y, couleur) {
        super(x, y);
        this.couleur = couleur;
    }
    afficherInfo() {
        console.log(" Je suis un cercle unitaire de centre (" +
        this.x +
        ", " +
        this.y +
        ") et de couleur " +
        this.couleur
        )
    }
};


const cercleUnitaireDeCouleur = new CercleUnitaireDeCouleur(10, 15, "rouge");
console.log('cercleUnitaireDeCouleur ', CercleUnitaireDeCouleur)
