const main = document.querySelector('.wrapper');

function makeLayout(object) {
    let displayPost = '';
        displayPost = `
            <div class='post'>
                <div class='post__heading'>Заголовок: ${object.title}</div>
                <div class='post__content'><span>Статья:</span> ${object.body}</div>
            </div>
        `
        main.innerHTML += displayPost;
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(post => {
            post.forEach(item => {
                makeLayout(item);
            });
        })
        .catch((error) => alert(error))
})