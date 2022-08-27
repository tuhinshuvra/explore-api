function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(maroDhu => maroDhu.json())
        .then(data => displayUsers(data))
}

function displayUsers(users) {
    for (const user of users) {
        // console.log(user);
        console.log(`Name :${user.name}`);
        console.log(`User Name :${user.username}`);
        console.log(`Email :${user.email}`);
        console.log(`Address :${user.address}`);
    }
}