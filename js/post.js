




function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
            <h4>User-${post.id}</h4>
            <h3>Post: ${post.title}</h3>
            <p>Description:${post.body}</p>
            `;
        postsContainer.appendChild(postDiv);
    }
}

loadPosts();