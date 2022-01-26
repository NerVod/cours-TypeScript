// Enums

const directions = {
    haut: 0,
    droite: 1,
    bas: 2,
    gauche: 3
};

const personnage = {
    direction: directions.haut,
};

const etatDuJeu = {
    pause: 0,
    running: 1,
}

console.log(personnage.direction); // 0-> "haut"

(function() {
    enum mouvement {
        haut, //0
        droite, // 1
        bas, //2
        gauche, //3
    }
    
    personnage.direction = mouvement.gauche;
    console.log(personnage.direction)

})();

(function () {
    enum mouvement {
        haut = 40, //40
        droite, // 41 (40 + 1)
        bas = 60, //60 -> définit manuellement
        gauche, //61 -> bas + 1  --> 60 + 1
    }

    personnage.direction = mouvement.gauche;
    console.log(personnage.direction)

    console.log(mouvement["haut"])  // voir noms valides de propriétés ci-dessous
    console.log(mouvement.droite)
    console.log(mouvement.bas)
    console.log(mouvement.gauche)
    console.log(mouvement[40])
    console.log(mouvement[41])
    console.log(mouvement[60])
    console.log(mouvement[61])

})(); 

// noms de propriétés invalide ? 
// -- commence par un nombre : 1Hello
// ne peut etre appelé 
    //mouvement.1Hello :
    // mais avec : mouvement["1Hello"]
// --contient des espaces
// contient des caract-res interdits : -,;:!?


// noms valides :
// --  caractères accentués
//  -- _$
// -- nombre ailleurs qu'au début



(function() {
    enum mouvement {
        haut = "UP",
        droite = "RIGHT",
        bas = 1, 
        gauche,
    }

})();


export default {}