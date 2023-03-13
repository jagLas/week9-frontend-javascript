// Your code here
window.addEventListener('DOMContentLoaded', () => {
    console.log('The Dom has loaded');
})

window.addEventListener('DOMContentLoaded', ()=> {
    const redInput = document.getElementById('red-input');
    redInput.addEventListener('input', () => {
        if (redInput.value === 'red') {
            redInput.setAttribute('style', 'background-color: red')
        } else {
            redInput.setAttribute('style', 'background-color: transparent')
        }
    })
})

window.addEventListener('DOMContentLoaded', ()=> {
    const addItemButton = document.getElementById('add-item');
    addItemButton.addEventListener('click', () => {
        const list = document.querySelector('#section-2 > ul')
        const li = document.createElement('li');
        const input = document.getElementById('list-add').value;
        li.innerText = input;
        list.appendChild(li);
    })
})