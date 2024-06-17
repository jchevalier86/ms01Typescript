interface Task {
    labelTask: string;
    description?: string;
    date?: Date;
    days: number;
}

let taskOne: Task = {
    labelTask: "tache1",
    description: "test1",
    days: 2,
    date: new Date(),
}

let taskTwo: Task = {
    labelTask: "tache2",
    description: "test2",
    days: 5,
    date: new Date(),
}

let taskThree: Task = {
    labelTask: "tache3",
    description: "test3",
    days: 9,
    date: new Date(),
}

let taskList: Array<Task> = [];
taskList.push(taskOne, taskTwo, taskThree);

for (let tasks of taskList) {
    if (tasks.days > 4) {
        console.log(tasks.labelTask, tasks.description, tasks.days, tasks.date)
    }
}