// Enums

const directions = {
  haut: 0,
  droite: 1,
  bas: 2,
  gauche: 3,
};

const personnage = {
  direction: directions.haut,
};

const etatDuJeu = {
  pause: 0,
  running: 1,
};

console.log(personnage.direction); // 0 -> "haut"

(function () {
  enum mouvement {
    haut, // 0
    droite, // 1
    bas, // 2
    gauche, // 3
  }
  console.log("🚀 ~ file: 04-enums.ts ~ line 37 ~ mouvement", mouvement);

  personnage.direction = mouvement.gauche;
  console.log(personnage.direction);

  console.log(mouvement[0]);
  console.log(mouvement[1]);
  console.log(mouvement[2]);
  console.log(mouvement[3]);
})();

(function () {
  enum mouvement {
    haut = 40, // 40
    droite, // 41 (haut + 1)
    bas = 60, // 60
    gauche, // 61 (bas + 1)
  }

  personnage.direction = mouvement.gauche;

  console.log("haut", mouvement.haut);
  console.log("droite", mouvement.droite);
  console.log("bas", mouvement.bas);
  console.log("gauche", mouvement.gauche);
  console.log(mouvement[40]);
  console.log(mouvement[41]);
  console.log(mouvement[60]);
  console.log(mouvement[61]);

  // Nom de propriété invalide ?
  // - commence par un nombre : "1hello"
  // - contient des espaces : "en haut à droite"
  // - contient des caractères interdits : -,;:!?

  // Valide
  // - caractères accentués
  // - _$
  // - nombre ailleurs qu'au début
})();

(function () {
  enum mouvement {
    haut = "UP",
    bas = "DOWN",
    gauche = 0,
    droite,
  }
  console.log("🚀 ~ file: 04-enums.ts ~ line 77 ~ mouvement", mouvement);
})();
