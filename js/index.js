



function getUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}



function displayUsers2(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        li.innerText = user.username;
        li.innerText = user.email;
        ul.appendChild(li)
    }
}