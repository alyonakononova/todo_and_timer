/* Список задач */

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    const newTask = document.createElement('li');
    newTask.innerText = todoInput.value;
    todoList.append(newTask);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('role', 'button');
    deleteButton.innerText ='Delete';
    deleteButton.style['margin-left'] = '15px';
    newTask.append(deleteButton);

    deleteButton.addEventListener('click', function () {
        newTask.remove();
    });

    todoInput.value = '';

    todoInput.focus();
}

/* Секундомер */

let counter = 0;
const counterElement = document.querySelector('#counter');
let timerId;

const btnStart = document.querySelector('#start');
btnStart.onclick = () => {
    timerId = setInterval(() => {
        counter++;
        counterElement.innerHTML = counter;
    }, 1000);
}

const btnPause = document.querySelector('#pause');
btnPause.onclick = () => clearInterval(timerId);

const btnReset = document.querySelector('#reset');
btnReset.onclick = () => {
    clearInterval(timerId);
    counter = 0;
    counterElement.innerText = counter;
}