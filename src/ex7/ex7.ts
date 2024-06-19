// Définition de la classe TableRows
class TableRows {
    // Méthode pour ajouter une nouvelle ligne à la fin du tableau
    addAtLastRow() {
        // Récupère l'élément du tableau avec l'id "myTable"
        let table = document.getElementById("myTable") as HTMLTableElement;
        // Obtient le nombre actuel de lignes dans le tableau
        let lengthRows = table.rows.length;
        // Insère une nouvelle ligne à la fin du tableau
        let row = table.insertRow(lengthRows);
        // Insère deux nouvelles cellules dans la nouvelle ligne
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        // Définit le contenu HTML de la première cellule
        cell1.innerHTML = "1 " + lengthRows;
        // Définit le contenu HTML de la deuxième cellule
        cell2.innerHTML = "2 " + lengthRows;
    }

    // Méthode pour supprimer la dernière ligne du tableau
    deleteLastRow() {
        // Récupère l'élément du tableau avec l'id "myTable"
        let table = document.getElementById("myTable") as HTMLTableElement;
        // Obtient le nombre actuel de lignes dans le tableau
        let lengthRows = table.rows.length;
        // Supprime la dernière ligne du tableau en utilisant la méthode remove() sur l'élément de la ligne
        document.getElementsByTagName("tr")[lengthRows - 1].remove();
    }

    deleteRow() {
        let table = document.getElementById("myTable") as HTMLTableElement;
        let lengthRows = table.rows.length;
        let indice = 2;
        document.getElementsByTagName("tr")[lengthRows - 1];
        if (indice >= 0 && indice < table.rows.length - 1) {
            // table.splice(indice, 1);
        }
    } 
}

// Fonction pour ajouter une ligne à la fin du tableau
function addAtLastRowJs() {
    // Crée une nouvelle instance de la classe TableRows
    let instance = new TableRows();
    // Appelle la méthode addAtLastRow pour ajouter une ligne
    instance.addAtLastRow();
}

// Fonction pour supprimer la dernière ligne du tableau
function deleteLastRowJs() {
    // Crée une nouvelle instance de la classe TableRows
    let instance = new TableRows();
    // Appelle la méthode deleteLastRow pour supprimer la dernière ligne
    instance.deleteLastRow();
}

// Fonction pour supprimer la dernière ligne du tableau
function deleteRow() {
    // Crée une nouvelle instance de la classe TableRows
    let instance = new TableRows();
    // Appelle la méthode deleteLastRow pour supprimer la dernière ligne
    instance.deleteRow();
}