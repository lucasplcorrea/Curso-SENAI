const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', removeTask);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}

function removeTask() {
    this.parentNode.remove();
}

addTaskBtn.addEventListener('click', addTask);

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        toggleTask.call(event.target);
    }
});
