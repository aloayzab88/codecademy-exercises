const tasks = [
    {name: 'Html form', status: 'Completed'},
    {name: 'Html header', status: 'Completed'},
    {name: 'Js validator', status: 'Completed'},
    {name: 'Css hero', status: 'In progress'},
    {name: 'Html hero', status: 'To do'},
    {name: 'Js menu', status: 'To do'},
];

// Function that filter any array given key/value
const filterPropEqualValue = (prop, value) => {
    /*  return a closure thar remenbers their prop,value and expect an array
        can be any array because is not hardcoded 😀 */
    return array => {
        let filteredArray = array.filter(item => item[prop] === value);
        /*  turns out arrays are fucking objects, so they can have properties 😲
            this fucker let me store the total length of the original array
            so I can calculate the progress without passing the array length again */
        filteredArray.totalTasks = array.length;
        return filteredArray;
    }
}
const taskLenght = task => task.length;

// I just could have used current.leght but I wanted to use a funtion insisde a function 😎
const progress = current => (taskLenght(current)/current.totalTasks)*100;

const filterCompleted = filterPropEqualValue('status','Completed');
const tasksCompleted = filterCompleted(tasks);
const progressCompleted = progress(tasksCompleted);
console.log(tasksCompleted);
console.log(progressCompleted);


const filterCompletedTasks = tasks.filter(item => item.status === 'Completed');
console.table(filterCompletedTasks)
