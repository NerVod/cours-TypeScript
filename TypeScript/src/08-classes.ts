class PersonnageBase {
    // Modificateur d'accès
    // -- private : n'est accessible que depuis l'intérieur de sa classe
    // -- public (par défaut) : accessible de partout
    // -- protected : n'est accessible que depuis l'intérieur de sa classe OU de toutes les classes dérivées (classes enfants)
    public x: number;
    public y: number;
    public nombreVies: number;
    protected secret: string = "1234";


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.nombreVies =5;
        this.gagnerVie();
    }

    gagnerVie() {
        this.nombreVies++;
        return this.nombreVies
    }

    perdreVie() {
        this.nombreVies--;
        return this.nombreVies
    }
}


const mario = new PersonnageBase(0, 0);
mario.gagnerVie();
console.log(mario.nombreVies)

class PersonnageVolant extends PersonnageBase {
    constructor(x, y) {
        super(x, y),
        this.peutVoler = true;
    }
};

const superman = new PersonnageVolant(2, 2) 
console.log(superman.secret)



export default {}