// index.ts
const math = require('./math.ts'); // Charger math.js avec require

let studentNumber: number=7;
console.log(studentNumber);


//const result = math.add(2, 3); // Utiliser la fonction add

// Mettre à jour le contenu d'un élément HTML avec le résultat
//(document.getElementById('result') as HTMLDivElement).innerText = `2 + 3 = ${result}`;
// Fonction pour appeler add avec deux paramètres et afficher le résultat
function addAndDisplay(x:number, y:number) {
    const result = math.add(x, y);
    const resultElement = document.getElementById('resultex10');
    if (resultElement) {
      resultElement.innerText = `${x} + ${y} = ${result}`;
    }
  }

  window.addAndDisplay = addAndDisplay;


