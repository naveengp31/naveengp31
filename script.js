document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            addTodoItem(input.value.trim());
            input.value = '';
        }
    });

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            addTodoItem(input.value.trim());
            input.value = '';
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
