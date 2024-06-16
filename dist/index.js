"use strict";
// index.ts
var math = require('./math.ts'); // Charger math.js avec require
//const result = math.add(2, 3); // Utiliser la fonction add
// Mettre à jour le contenu d'un élément HTML avec le résultat
//(document.getElementById('result') as HTMLDivElement).innerText = `2 + 3 = ${result}`;
// Fonction pour appeler add avec deux paramètres et afficher le résultat
function addAndDisplay(x, y) {
    var result = math.add(x, y);
    var resultElement = document.getElementById('resultex10');
    if (resultElement) {
        resultElement.innerText = "".concat(x, " + ").concat(y, " = ").concat(result);
    }
}
window.addAndDisplay = addAndDisplay;
