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
var PersonnageBase = /** @class */ (function () {
    function PersonnageBase(x, y) {
        this.secret = "1234";
        this.x = x;
        this.y = y;
        this.nombreVies = 5;
        this.gagnerVie();
    }
    PersonnageBase.prototype.gagnerVie = function () {
        this.nombreVies++;
        return this.nombreVies;
    };
    PersonnageBase.prototype.perdreVie = function () {
        this.nombreVies--;
        return this.nombreVies;
    };
    return PersonnageBase;
}());
var mario = new PersonnageBase(0, 0);
console.log("🚀 ~ file: 08-classes.ts ~ line 28 ~ mario", mario);
mario.gagnerVie();
console.log(mario.nombreVies);
var PersonnageVolant = /** @class */ (function (_super) {
    __extends(PersonnageVolant, _super);
    function PersonnageVolant(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.peutVoler = true;
        console.log(_this.secret);
        return _this;
    }
    return PersonnageVolant;
}(PersonnageBase));
var superman = new PersonnageVolant(2, 2);
console.log(superman.secret);
