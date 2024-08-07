class TaskManager {
    #tasklist;

    constructor() {
        this.#tasklist = [];
    }
    
    addTask(title, description) {
        const task = { title, description , completed : false};
        try {
            if(this.#tasklist.some(obj => obj.title === task.title)) {
                throw Error('There is allready a task with that title');
            }
            this.#tasklist.push(task)
            return console.log(`Task: ${title} added`);
        } catch (error) {
            console.log(error.message);
        }
    }

    completeTask(title) {
        try {
            const task = this.#tasklist.find(obj => obj.title === title);
            if (!task) {
                throw Error('Task no found');
            }
            task.completed = true;
        } catch (error) {
            console.log(error.message);
        }
    }

    removeTask(title) {
        try {
            const task = this.#tasklist.findIndex(obj => obj.title === title);
            if (task < 0) {
                throw Error('Task no found');
            }
            this.#tasklist.splice(task, 1);
        } catch (error) {
            console.log(error.message);
        }
    }

    getPendingTasks() {
        const tasks = this.#tasklist.filter(obj => obj.completed === false);
        return tasks.length > 0 ? tasks : 'All task are completed';
    }

    getCompletedTasks() {
        const tasks = this.#tasklist.filter(obj => obj.completed === true);
        return tasks.length > 0 ? tasks : 'No task are completed';
    }

    getAllTasks() {
        return this.#tasklist;
    }
 }

const manager = new TaskManager();

manager.addTask('Buy milk', 'Buy 3 boxes of milk');
manager.completeTask('Buy milk');
manager.addTask('Buy chocolate', 'Buy 3 chocolates');
manager.completeTask('Buy chocolate');
manager.addTask('Buy flowers', 'Buy 3 sunflowes');
manager.addTask('Buy cookies', 'Buy 3 chocolate cookies');

console.table(manager.getAllTasks());
manager.removeTask('Buy chocolate');
console.table(manager.getAllTasks());
console.table(manager.getPendingTasks());
console.table(manager.getCompletedTasks());
