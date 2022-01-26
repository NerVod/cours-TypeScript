/**
 * Decorators
 *
 * Un décorateur (decorator) est une fonction qui vient "enrichir" une classe, une méthode, une propriété ou un paramètre en y attachant de nouvelles propriétés ou en modifiant son comportement par défaut.
 */

// 1. Décorateur de classe SANS paramètre

function Timestamp<T extends { new (...args: any[]): {} }>(constructeur: T) {
  return class extends constructeur {
    constructor(...args: any[]) {
      super(...args);
      console.log("Nouvelle instance créée à ", new Date().getTime());
    }
  };
}

@Timestamp
class MaClasse {} // équivalent ES5 : function MaClasse() {}

setInterval(() => {
  new MaClasse();
}, 1000);

// C'est comme s'il passait ça :
// const ClasseEnrichie = Timestamp(MaClasse);

// 2. Décorateur de classe AVEC paramtère : "Decator Factories"

function staticColor(couleur: string) {
  return function <T extends { new (...args: any[]): {} }>(constructeur: T) {
    return class extends constructeur {
      static couleur: string = couleur;
    };
  };
}

@staticColor("rouge")
class TelevisionNoirEtBlanc {}

console.log(TelevisionNoirEtBlanc.couleur);
const tv1 = new TelevisionNoirEtBlanc();
