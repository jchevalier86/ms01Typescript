interface Task {
    labelTask: string;
    description?: string;
    date?: Date;
    days: number;
}

let task: Task = {
    labelTask: "tache 1",
    description: "test"
};
console.log(task);

let valeur: any = "17/06/2024";
let date: Date = valeur as Date;
console.log(date);

