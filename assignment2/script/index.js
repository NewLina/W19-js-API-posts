const postContainer = document.querySelector('.post-container');
const title = document.querySelector('.container__input__title');
const postContent = document.querySelector('.container__input__content');
const button = document.querySelector('.container__input__button');

function createLayout(title, body) {
    let postList = '';
    postList = `
    <div class='post-container__post post'>
    <div class='post__title'>${title}</div>
    <div class='post__content'>${body}</div>
    </div>
    `
    postContainer.innerHTML += postList;
}

function cleanInput() {
    title.value = '';
    postContent.value = '';
}

function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: postContent.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then((data) => {
            createLayout(data.title, data.body);
            cleanInput();
        })
}

button.addEventListener('click', createPost);