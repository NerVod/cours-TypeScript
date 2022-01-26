/*
 Decorators

    Un décorateur est une fonction qui vient "enrichir" une classe, une méthode une propriété ou un paramètre en y attacgant de nouvelles propriétés eou en modifiant son comportement par défaut


*/


// 1 décorateur de classe SANS paramètre


function TimeStamp<T extends { new (...args: any[]): {} }>(constructeur: T) {
    return class extends constructeur {
        constructor(...args: any[]) {
            super(...args)
            console.log("Nouvelle instance créée à ", new Date().getTime()));
        }
    };
}

@TimeStamp
class MaClasse {}; // équivalent ES5 : function MaClasse() {}


setInterval(() => {
    new MaClasse();
}, 1000)

// C'est comme s'il se passait ça :
// class ClasseEnrichie = TimeStamp(MaClasse)

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// 2 décorateur de classe AVEC paramètre : "Decorator Factories"

function staticColor(couleur: string) {
    return function <T extends {new (...args: any[]): {} }>(constructeur: T) {
        return class extends constructeur {
            static couleur: string = couleur;
        };
    }
}


@staticColor("rouge")
class TelevisionNoirEtBlanc

console.log(TelevisionNoirEtBlanc.couleur)
const tv1 = new TelevisionNoirEtBlanc();