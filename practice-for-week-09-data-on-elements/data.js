// Your code here
window.addEventListener('DOMContentLoaded', () => {
    const add = document.querySelector('#add');
    add.addEventListener('click', addToList);
    console.log('eventmade')
})

function addToList(event){
    // const form = document.querySelector('form')
    event.preventDefault()
    const name = document.querySelector('#name');
    const type = document.querySelector('#type').value;
    const item = document.createElement('li');
    // debugger
    item.innerText = name.value;
    item.setAttribute('data-type', type)
    name.value = ''
    // debugger
    document.querySelector('#shopping-list').appendChild(item);
    console.log(item.dataset.type)
}