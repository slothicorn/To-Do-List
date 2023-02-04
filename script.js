const form = document.querySelector('form');
const todosList = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('user-todo');

// WITH LOCAL STORAGE


let todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

const storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', (event) => {
    event.preventDefault();

    todosArray.push(input.value);

    localStorage.setItem('todos', JSON.stringify(todosArray));
    todoMaker(input.value);
    input.value = "";
});

const todoMaker = (text) => {
    const todo = document.createElement('li');
    todo.textContent = text;
    todosList.appendChild(todo);
};

for (var i = 0; i < storage.length; i++) {
    todoMaker(storage[i]);
}

button.addEventListener('click', () => {
    localStorage.clear('todos');
    while (todosList.firstChild) {
        todosList.removeChild(todosList.firstChild);
    }
});

        // WITHOUT LOCAL STORAGE
        // form.addEventListener('submit', (event) => {
        //     event.preventDefault();
        //     todoMaker(input.value);
        //     input.value = "";
        // });

        // const todoMaker = (text) => {
        //     const todo = document.createElement('li');
        //     todo.textContent = text;
        //     todosList.appendChild(todo);
        // };

        // button.addEventListener('click', () => {
        //     while (todosList.firstChild) {
        //         todosList.removeChild(todosList.firstChild);
        //     }
        // });