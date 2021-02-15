"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personne_1 = require("./personne");
var p1 = new personne_1.Personne();
p1.prenom = "didier";
p1.nom = "defrance";
try {
    p1.age = -5;
}
catch (ex) {
    console.log("exception: " + ex);
}
p1.age = 51;
console.log(p1.prenom);
console.log(p1); //ok en typescript
console.log(JSON.stringify(p1)); //ok en ts et en js
//# sourceMappingURL=test-personne.js.map