const titleDOM = document.getElementById('title');

console.log(titleDOM);

titleDOM.innerText = 'Ka';

console.log(titleDOM.classList.add('title'));
console.log(titleDOM.classList.add('red'));

titleDOM.addEventListener('click', (ev)=>{
    ev.target.classList.toggle('red');
})

const sectionTitle = 'About you';
const sectionTitleDOM = document.querySelector('h2.section-title > span');

sectionTitleDOM.textContent = sectionTitle;