

function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComments(data))
}

function displayComments(comments) {
    // console.log('I am comments api');
    const commetnsContainer = document.getElementById('all-comments');
    for (const comment of comments) {
        console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Post-Id:${comment.postId}</h3>
        <h4>Body:${comment.body}</h4>
        <h4>Name:${comment.name}</h4>
        <h4>Email:${comment.email}</h4>        
        `;
        commetnsContainer.appendChild(div);

    }

}

loadComments();

// body  email id name postId