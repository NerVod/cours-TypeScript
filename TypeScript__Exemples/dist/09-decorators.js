/**
 * Decorators
 *
 * Un décorateur (decorator) est une fonction qui vient "enrichir" une classe, une méthode, une propriété ou un paramètre en y attachant de nouvelles propriétés ou en modifiant son comportement par défaut.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. Décorateur de classe SANS paramètre
function Timestamp(constructeur) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            console.log("Nouvelle instance créée à ", new Date().getTime());
            return _this;
        }
        return class_1;
    }(constructeur));
}
var MaClasse = /** @class */ (function () {
    function MaClasse() {
    }
    MaClasse = __decorate([
        Timestamp
    ], MaClasse);
    return MaClasse;
}()); // équivalent ES5 : function MaClasse() {}
setInterval(function () {
    new MaClasse();
}, 1000);
// C'est comme s'il passait ça :
// const ClasseEnrichie = Timestamp(MaClasse);
// 2. Décorateur de classe AVEC paramtère : "Decator Factories"
function staticColor(couleur) {
    return function (constructeur) {
        var _a;
        return _a = /** @class */ (function (_super) {
                __extends(class_2, _super);
                function class_2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return class_2;
            }(constructeur)),
            _a.couleur = couleur,
            _a;
    };
}
var TelevisionNoirEtBlanc = /** @class */ (function () {
    function TelevisionNoirEtBlanc() {
    }
    TelevisionNoirEtBlanc = __decorate([
        staticColor("rouge")
    ], TelevisionNoirEtBlanc);
    return TelevisionNoirEtBlanc;
}());
console.log(TelevisionNoirEtBlanc.couleur);
var tv1 = new TelevisionNoirEtBlanc();
