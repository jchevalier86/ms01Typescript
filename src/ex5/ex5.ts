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
let result = 0;

for (let task of taskListTwo) {
    if (task.days > 4) {
        result = somme(result, task.days);
        console.log(task.labelTask, task.description, task.days, task.date)
    }
}
console.log("Le nombre de jours est de " + result + " jours")

function somme(result: number, sommeAdditionner: number): number {
    return result + sommeAdditionner;
}