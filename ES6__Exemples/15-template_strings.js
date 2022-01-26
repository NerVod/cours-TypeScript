/*
  LITTERAUX DE GABARITS
*/

const nom = "Bond";
const prenom = "James";
const r = 10;

// ES6
const presentation = `Je m'appelle ${nom}, ${prenom} ${nom}.`;
const circonferenceDuCercle = `La circonference est de ${2 * Math.PI * r}`;

// ES5
const presentationES5 = "Je m'appelle " + nom + ", " + prenom + " " + nom + ".";
const circonferenceDuCercleES5 = "la circonference est de " + 2 * Math.PI * r;

/* 
  Gabarits étiquettés :

  Possibilité de préfixer un littéral de gabarit avec une fonction (appelée étiquette).
*/

function etiquette(chaines, ...valeursInterpolees) {
  console.log("chaines", chaines);
  console.log("valeursInterpolees", valeursInterpolees);

  // Ici on choisit de reconstruire la chaîne initiale (on est libre de faire ce que l'on veut)
  let texte = "";
  for (let i = 0; i < chaines.length; i++) {
    texte += chaines[i];
    if (valeursInterpolees[i]) {
      texte += valeursInterpolees[i];
    }
  }
  return texte;
}

const astre = "Lune";
const ami = "Pierrot";

const texte = etiquette`Au clair de la ${astre}, mon ami ${ami}.`;
