// CONVERTING TO JSON FORMAT 

const fs = require('fs'); //importing the fs module

function saveTasks(filePath, tasks) {
    const jsonTasks = JSON.stringify(tasks, null, 2);  //see below
    fs.writeFileSync(filePath, jsonTasks, 'utf8'); // write the JSON to the file
    console.log(`Tasks saved to`, filePath);
}

/*
JSON.stringify() method converts JS objects into a JSON string
null for filtering of object properts, 2 adds two spaces for indentation

fs.writeFileSync(): synchronous version of writeFile, writes JSON data to a file and
blocks further execution until done.

*/

function loadTasks(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log('No task file found.');
        return [];
    }

    const data = fs.readFileSync(filePath, 'utf8'); //reads file contents, utf8 as encoding
    return JSON.parse(data); //converts (parse) JSON strings back into JS when reading the file
}



// const myTasks = ['do assignemnt', 'practice problems'];

// saveTasks('tasks.json', myTasks);

// const loadedTasks = loadTasks('tasks.json');
// console.log('Loaded tasks:', loadedTasks);
/*
in functions, filePath is being used as a parameter.. 
when you call saveTasks/loadTasks, you provide value (tasks.json)
*/

module.exports = {
    saveTasks,
    loadTasks
};

