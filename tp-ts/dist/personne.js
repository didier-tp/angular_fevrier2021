"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(prenom, nom, _age) {
        if (prenom === void 0) { prenom = " ?"; }
        if (nom === void 0) { nom = " ?"; }
        if (_age === void 0) { _age = 0; }
        this.prenom = prenom;
        this.nom = nom;
        this._age = _age;
        this.taille = 0;
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (a) {
            if (a >= 0)
                this._age = a;
            else
                throw "age negatif interdit";
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=personne.js.map