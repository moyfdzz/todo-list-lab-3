function postTodo() {
    let todoForm = document.getElementById('todoForm');

    todoForm.addEventListener('submit', (event) => {
        let newTodo = document.getElementById('newTodo').value;
        let todoList = document.getElementById('todoList');
        let listItem = document.createElement('li');
        let elem = document.createElement('div');
        document.getElementById("todoField").value = '';
        let checkbox = document.createElement('input'); 
        checkbox.type = "checkbox";

        if (newTodo === '') {
            console.log("The new todo is empty.");
    
            return;
        }

        elem.appendChild(checkbox);
        elem.appendChild(document.createTextNode(newTodo));
        li.appendChild(element);
        li.classList.add("newElement");
        todoList.appendChild(li);

        console.log("The new todo was added to the todo list.");
    })
}

function clearAll() {
    let clearAllButton = document.getElementById('clearAllButton');

    clearAllButton.addEventListener('click', () => {
        let todoList = document.getElementById('todoList').children;

        for(let i = 0; i < todoList.length; i++) {
            todoList[i].children[1].checked = false;
        }
    });
}

function markAll() {
    let markAllButton = document.getElementById('markAllButton');

    markAllButton.addEventListener('click', () => {
        let todoList = document.getElementById('todoList').children;

        for(let i = 0; i < todoList.length; i++) {
            todoList[i].children[1].checked = true;
        }
    });
}

function deleteAll() {
    let deleteAllButton = document.getElementById('deleteAllButton');

    deleteAllButton.addEventListener('click', () => {
        let todoList = document.getElementById('todoList');
        todoList.innerHTML = "";
    });
}

function init() {
    postTodo();
    clearAll();
    markAll();
    deleteAll();
}

init();