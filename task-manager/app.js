

const { addTasks, listTasks } = require('./taskManager.js'); 
const { saveTasks, loadTasks } = require('./fileHandler.js');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

let tasks = loadTasks(filePath);

addTasks(tasks, 'review');
addTasks(tasks, 'turn in assignment');

listTasks(tasks);

saveTasks(filePath, tasks);












// const myTasks = [];

// taskManager.addTasks(myTasks, 'do assignment');
// taskManager.addTasks(myTasks, 'practice problems');

// console.log(myTasks);

// //file handler imported module
// const jsonTasks = ['do assignemnt', 'practice problems'];

// fileHandler.saveTasks('tasks.json', jsonTasks);

// const loadedTasks = fileHandler.loadTasks('tasks.json');
// console.log('Loaded tasks:', loadedTasks);
