const h1DOM = document.querySelector('h1');
h1DOM.textContent = 'Movies...'

const movies = [
    'Pretendent',
    'A Team',
    'Duncan MacLeod',
    'Matrix',
    'Walker: Texas Ranger',
    'Her name Nikita',
    "Shrek",
    "Mario",
    'Sphera',
];

const ulDOM = document.getElementsByTagName('ul')[0];
console.log(ulDOM);

let moviesHTML = '';

for (let i = 0; i < movies.length; i++) {
    const element = movies[i];
    moviesHTML += `<li>${element}</li>`
}

ulDOM.innerHTML = moviesHTML;