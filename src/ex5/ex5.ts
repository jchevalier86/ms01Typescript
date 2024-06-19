// ---------------------------------------------- //
// ----------Exercice interface & objet---------- //
// ---------------------------------------------- //

interface Task {
    labelTask: string;
    description?: string;
    date?: Date;
    days: number;
}

let taskFour: Task = {
    labelTask: "tache1",
    description: "test1",
    days: 2,
    date: new Date(),
}

let taskFive: Task = {
    labelTask: "tache2",
    description: "test2",
    days: 5,
    date: new Date(),
}

let taskSix: Task = {
    labelTask: "tache3",
    description: "test3",
    days: 9,
    date: new Date(),
}

let taskListTwo: Array<Task> = [];
taskListTwo.push(taskFour, taskFive, taskSix);
let resultOne = 0;

// ---------------------------------------------- //
// ----------Exercice function & boucle---------- //
// ---------------------------------------------- //

// for (let task of taskListTwo) {
//     if (task.days > 4) {
//         resultOne = somme(resultOne, task.days);
//         console.log(task.labelTask, task.description, task.days, task.date)
//     }
// }
// console.log("Le nombre de jours est de " + resultOne + " jours")

// function somme(resultOne: number, sommeAdditionner: number): number {
//     return resultOne + sommeAdditionner;
// }

// ---------------------------------------------- //
// ------------Exercice méthodes----------------- //
// ---------------------------------------------- //

// methode filter
let resultTwo = 0;
let listTask = taskListTwo.filter((task) => task.days > 4);

//console.log(listTask);

// methode reduce
let initialValue = 0;
let sumWithInitial = listTask.reduce(
    (accumulator, task) => accumulator + task.days,
    initialValue);

//console.log(sumWithInitial);

// methode map : multiplie le nombre de jours par 2
let total = 0;
let multiSommeDays = taskListTwo.map((task) =>  {
    return task.days * 2;
});

// console.log(multiSommeDays);

// methode forEach
taskListTwo.forEach((task) => console.log(task.labelTask + " " + task.description + " " + task.days + " " + task.days * 2));

// methode Date
// importation de la bibliothèque dateformat
// import dateFormat from 'dateformat';
// const dateFormat = require('dateformat');
// créer une nouvelle date
// const now = new Date();
// formatez la date
// const formatteDate = dateFormat(now, 'dd/mm/yyyy');

// console.log(formatteDate); // afficher la date au format spécifié

// ---------------------------------------------- //
// ------------Exercice class extends------------ //
// ---------------------------------------------- //

class Management {
    service: string;

    send() {
        console.log('Ordre envoyé');
    }

    constructor(service: string) {
        this.service = service;
    }

    afficher() {
        console.log('Service: ${this.service}')
    }
}

class TopManagement extends Management {
    askService() {
        console.log('Service demandé');
    }
}

let topmanagement = new TopManagement("maintenance du code PHP");
topmanagement.send();
topmanagement.afficher();
topmanagement.askService;


class TaskOne {
    labelTask: string;
    protected description: string;
    date: Date;

    constructor(labelTask: string, description: string, date: Date) {
        this.labelTask = labelTask;
        this.description = description;
        this.date = date;
    }
}

class ItTask extends TaskOne {
    constructor(description: string, labelTask: string, date: Date) {
        super(description, labelTask, date);
    }
    getDescription(): string {
        return this.description;
    }
}

const itTask = new ItTask("Description de la tâche IT", "Label de la tâche", new Date());
console.log(itTask.getDescription() + " " + itTask.labelTask + " " + itTask.date);  // Affiche: "Description de la tâche IT", Label de la tâche et la date actuelle

// ---------------------------------------------- //
// ------------Exercice générique---------------- //
// ---------------------------------------------- //

class ShowMessage<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }

    afficher() {
        console.log(this.content);
    }
}

let showMessage = new ShowMessage(1020);
showMessage.afficher(); // 1020
let showNombre = new ShowMessage("Bonjour");
showNombre.afficher(); // Bonjour
let showTask = new ShowMessage(taskFour.labelTask);
showTask.afficher();