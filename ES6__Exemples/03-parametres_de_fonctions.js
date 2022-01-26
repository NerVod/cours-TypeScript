/*
  Paramètres par défaut
*/

// ES5
function additionner(a, b) {
  if (a === undefined) {
    a = 1;
  }
  if (b === undefined) {
    b = 4;
  }
  return a + b;
}

console.log(additionner(1, 2)); // 3
console.log(additionner(3)); // 3 + undefined = NaN
console.log(additionner()); // undefined + undefined = NaN

// ES6

function additionnerAvecDefaut(a = 1, b = 4) {
  return a + b;
}

console.log(additionnerAvecDefaut(1, 2));
console.log(additionnerAvecDefaut(3));
console.log(additionnerAvecDefaut(undefined, 10));
console.log(additionnerAvecDefaut(5, null)); // null est converti en 0

/*
  Paramètre de reste (rest parameter)
*/

function fonctionAvecReste(a, b, ...reste) {
  console.log("a", a);
  console.log("b", b);
  console.log(reste);

  for (let i = 0; i < reste.length; i++) {
    console.log("reste[" + i + "] = ", reste[i]);
  }
}

fonctionAvecReste(1, 2, 3, 4, 5, 6);

// ES6
function additionSansLimite(...nombres) {
  // méthode reduce
  return nombres.reduce((total, nombre) => {
    return total + nombre;
  }, 0);

  // méthode boucle for
  let total = 0;
  for (let i = 0; i < nombres.length; i++) {
    total += nombres[i];
  }
  return total;
}

console.log(additionSansLimite(1, 2, 3, 4, 5, 6, 7));

// ES5
function additionSansLimiteES5(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);

  // méthode boucle for
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("additionSansLimiteES5", additionSansLimiteES5(10, 3, 7, 15, 100));
