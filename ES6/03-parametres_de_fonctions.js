/*
Paramètres par Défaut
*/

// ES5 
function additionner(a, b) {
    if(a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 4;
    }
    return a + b;
}

console.log(additionner(1, 2)); // 3
console.log(additionner(3)); // 3 + undefined
console.log(additionner()); // undefined + undefined = NaN

// ES6 
function additionnerAvecDefaut(a = 0, b = 4) {
    return (a + b);
}
console.log("addition avec défaut : ",additionnerAvecDefaut(1, 2));
console.log("addition avec défaut : ",additionnerAvecDefaut(5));
console.log("addition avec défaut : ",additionnerAvecDefaut(undefined , 10));
console.log("addition avec défaut : ",additionnerAvecDefaut(5, null)); // null est convertit en 0


/*
Paramètre de reste (rest parameter)
*/

function fonctionAvecReste(a, b, ...reste) {
    console.log("a : ", a)
    console.log("b : ", b)
    console.log("reste : ", reste);
    for(let i=0; i< reste.length; i++) {
        console.log("reste[" + i + "] = ", reste[i]);
    }
};

fonctionAvecReste(1, 2, 3, 4, 5, 6);

// ES6
function additionSansLimite(...nombres) {

        // méthode boucle For 
    // let total= 0;
    // for(let i=0; i< nombres.length; i++) {
    //     total += nombres[i];
    // }
    // return total


    // méthode reduce
    return nombres.reduce((total, nombre) => {
        return total + nombre
    }, 0)
}
console.log(additionSansLimite(1, 2, 3, 4, 5, 6, 7)); // 28
console.log(additionSansLimite(1, 2, 3, "4", 5, 6, 7)); // 64567 => additionne puis concatène quand trouve le string

// en ES5
function additionSansLimiteES5() {
    console.log(arguments)

    //méthode boule for
    let total = 0
    for (let i=0; i< arguments.length; i++) {
        total += arguments[i]
    }
    return total

}
console.log("additionSansLimiteEs5 ", additionSansLimiteES5(10, 3, 7, 100))