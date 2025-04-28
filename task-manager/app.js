

const { addTasks, listTasks } = require('./taskManager.js'); 
const { saveTasks, loadTasks } = require('./fileHandler.js');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

let tasks = loadTasks(filePath);

addTasks(tasks, 'review');
addTasks(tasks, 'turn in assignment');

listTasks(tasks);

saveTasks(filePath, tasks);

