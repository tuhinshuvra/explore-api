function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => diplayTodos(data))
}


function diplayTodos(allTodo) {
    const todoListContainer = document.getElementById('todos-list');
    for (const todo of allTodo) {

        const div = document.createElement('div');
        // div.classList.add('todo');
        div.innerHTML = `
        <h3>Id: ${todo.userId}</h3>
        <h3>Title: ${todo.title}</h3>
        <h3>Completed: ${todo.completed}</h3>`;

        todoListContainer.appendChild(div);
    }

}

loadTodos();

// completed id title userId