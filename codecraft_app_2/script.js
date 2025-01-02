// Select elements
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task event
addTaskButton.addEventListener('click', addTask);

// Function to add task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskItem = document.createElement('li');

        // Task text
        const taskTextElement = document.createElement('span');
        taskTextElement.innerText = taskText;
        taskTextElement.addEventListener('click', editTask);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

       
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

       
        taskList.appendChild(taskItem);

       
        taskInput.value = '';
    }
}


function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}


function editTask(event) {
    const taskTextElement = event.target;
    if (!taskTextElement.classList.contains('editing')) {
        const newTaskText = prompt("Edit task:", taskTextElement.innerText);
        if (newTaskText && newTaskText.trim() !== '') {
            taskTextElement.innerText = newTaskText;
        }
    }
}
