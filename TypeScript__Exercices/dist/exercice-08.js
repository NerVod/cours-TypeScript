const doubler = (valeur) => {
    return valeur * 2;
};
console.log(doubler(5));
const direBonjour = (nom = "Bart Simpson") => {
    console.log(`Bonjour ${nom}`);
};
direBonjour("Marc");
direBonjour();
