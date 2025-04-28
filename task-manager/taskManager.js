const myTasks = [];


function addTasks(tasks, task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}


addTasks(myTasks, 'do assignment');
addTasks(myTasks, 'practice problems');

// console.log(myTasks);

function listTasks(tasks) {
    console.log(`Tasks:`);
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

listTasks(myTasks);

module.exports = {
    addTasks,
    listTasks
};