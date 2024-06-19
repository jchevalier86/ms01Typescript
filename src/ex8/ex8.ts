// Déclaration d'une classe générique DoubleObject avec deux types T et U
class DoubleObject<T, U> {
    first: T;
    second: U;

    // Constructeur qui initialise les propriétés first et second avec les valeurs passées en paramètres
    constructor(first: T, second: U){
        this.first = first;
        this.second = second;
    }

    // Méthode pour obtenir la valeur de la propriété first
    getAge(): T {
        return this.first;
    }

    // Méthode pour obtenir la valeur de la propriété second
    getName(): U {
        return this.second;
    }
}

// Déclaration d'une interface générique IReturn avec deux types T et U
interface IReturn<T, U> {
    firstValue: T,
    secondValue: U,
}

// Déclaration d'une classe générique Pair avec deux types T et U
class Pair<T, U> {
    private first: T;
    private second: U;
    private third: DoubleObject<T, U>;

    // Constructeur qui initialise les propriétés first et second, et crée une instance de DoubleObject
    constructor(first: T, second: U) {
      this.first = first;
      this.second = second;
      this.third = new DoubleObject(first, second);
    }

    // Méthode pour obtenir la valeur de la propriété first
    getFirst(): T {
      return this.first;
    }

    // Méthode pour obtenir la valeur de la propriété second
    getSecond(): U {
      return this.second;
    }

    // Méthode pour obtenir un objet contenant les valeurs de first et second via l'instance de DoubleObject
    getBoth(): IReturn<T, U> {
        let returnObject: IReturn<T, U> = {
            firstValue: this.third.first,
            secondValue: this.third.second,
        }
        return returnObject;
    }
}

// Création d'une instance de Pair avec des types string et number
let pairInstance = new Pair<string, number>("Age", 30);

// Affichage de la valeur de la propriété first de pairInstance
console.log(pairInstance.getFirst()); // "Age"

// Affichage de la valeur de la propriété second de pairInstance
console.log(pairInstance.getSecond()); // 30

// Obtention de l'objet contenant les valeurs de first et second
let objBoth = pairInstance.getBoth();

// Affichage des valeurs de l'objet obtenu
console.log(objBoth.firstValue + " " + objBoth.secondValue); // "Age 30"

// La ligne suivante est commentée car la méthode getAgeAndName n'existe pas
// console.log(objBoth.getAgeAndName()); //  "Age", 30
