// Fonctions
var additionner = function (a, b) {
    return a + b;
};
additionner(1, 2);
additionner("bonjour", "tout le monde");
// Paramètres optionnels
var multiplication;
multiplication = function (a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
};
multiplication(10, 5);
multiplication(10);
// Unions de types pour les arguments
var sePresenter = function (nom, age) {
    return "Je m'appelle ".concat(nom, " et j'ai ").concat(age, " ans.");
};
sePresenter("toto", 10);
sePresenter("toto", "dix");
function add(a, b) {
    return a + b;
}
add(2, 3);
add("deux", "trois");
add(2, "trois"); // on n'a pas autorisé le mélange des types d'arguments
