const search = document.querySelector('.search-container');
const input = document.querySelector('.input');
const btnSearch  = document.querySelector('.search');
const btnClose  = document.querySelector('.close');

btnSearch.addEventListener('click', () => {
    if (input.value) {
        alert(input.value)
    } else {
        search.classList.add('active');
        input.focus();
    }       
})

btnClose.addEventListener('click', () => {
    if (input.value) {
        input.value = "";
    } else {
        search.classList.remove('active');
    }
})