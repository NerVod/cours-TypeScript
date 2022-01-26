// fonctions

    // on définit le types des argument et en dehotrs de la valeur de retour :
const additionner = (a: number, b: number): number => {
    return a + b;
};

additionner(1, 2);
additionner("bonjour", "tout le monde");



// paramètre optionnel : le ? pour paramètre optionnel
let multiplication: (a: number, b?: number) => number;
multiplication= (a, b =1) => {
    return a * b;
}

multiplication(10, 5);
multiplication(10);


// Unions de types pour les arguments 
const sePresenter = (nom: string, age: number | string): string => {
    return `Je m'appelle ${nom} et j'ai ${age} ans.`
}

sePresenter("toto", 10);
sePresenter("toto", "dix");

// function overload 
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a, b) {
    return a + b;
}

add(2, 3);
add("deux", "trois");
add(2, "trois"); // on n'a pas autorisé le mélange des types d'arguments




export default {};