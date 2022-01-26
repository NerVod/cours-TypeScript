class PersonnageBase {
  // MOdificateurs de propriété
  // - private : n'est accessible que depuis l'intérieur de sa classe
  // - public (par défaut) : est accessible de partout
  // - protected : n'est accessible que depuis l'intérieur de sa classe OU de toutes les classes dérivées (classes enfant)
  public x: number;
  public y: number;
  public nombreVies: number;
  protected secret: string = "1234";

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.nombreVies = 5;
    this.gagnerVie();
  }

  private gagnerVie() {
    this.nombreVies++;
    return this.nombreVies;
  }

  public perdreVie() {
    this.nombreVies--;
    return this.nombreVies;
  }
}

const mario = new PersonnageBase(0, 0);
console.log("🚀 ~ file: 08-classes.ts ~ line 28 ~ mario", mario);
mario.gagnerVie();
console.log(mario.nombreVies);

class PersonnageVolant extends PersonnageBase {
  peutVoler: boolean;

  constructor(x, y) {
    super(x, y);
    this.peutVoler = true;
    console.log(this.secret);
  }
}

const superman = new PersonnageVolant(2, 2);
console.log(superman.secret);
