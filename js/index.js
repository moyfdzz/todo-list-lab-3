function postTodo() {
    let todoForm = document.getElementById('todoForm');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newTodo = document.getElementById('newTodo').value;

        if (newTodo === '') {
            console.log('The new todo is empty.');
            return;
        }

        document.getElementById('newTodo').value = '';
        let todoList = document.getElementById('todoList');
        let text = document.createElement('p');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let elem = document.createElement('div');
        elem.classList.add('todoItem');
        text.appendChild(document.createTextNode(newTodo));
        elem.appendChild(checkbox);
        elem.appendChild(text);
        todoList.appendChild(elem);

        console.log('The new todo was added to the todo list.');
    })
}

function clearAll() {
    let clearAllButton = document.getElementById('clearAllButton');

    clearAllButton.addEventListener('click', () => {
        let checkboxes = document.getElementsByTagName('input');

        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    });
}

function markAll() {
    let markAllButton = document.getElementById('markAllButton');

    markAllButton.addEventListener('click', () => {
        let checkboxes = document.getElementsByTagName('input');

        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    });
}

function deleteAll() {
    let deleteAllButton = document.getElementById('deleteAllButton');

    deleteAllButton.addEventListener('click', () => {
        let todoList = document.getElementById('todoList');
        todoList.innerHTML = '';
    });
}

function init() {
    postTodo();
    clearAll();
    markAll();
    deleteAll();
}

init();