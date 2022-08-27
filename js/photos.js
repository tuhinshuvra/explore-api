function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photo => displayPhotos(photo))
}


function displayPhotos(photos) {
    const showPphotos = document.getElementById('show-photos');
    for (const photo of photos) {
        console.log(photo)
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>albumId:${photo.albumId}</h3>    
        <p>title:${photo.title}</p>    
        <p>albumId:${photo.id}</p>    
        <p>thumbnailUrl:${photo.thumbnailUrl}</p>
        <img src="${photo.url} " alt="">
        `;


        showPphotos.appendChild(div);
    }


}



getPhotos();
// albumId: 81
// id: 4001
// thumbnailUrl: "https://via.placeholder.com/150/f1a745"
// title: "ut neque perferendis quas qui unde necessitatibus voluptates et"
// url:
