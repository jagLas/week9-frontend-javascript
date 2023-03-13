// Your code here
window.addEventListener('DOMContentLoaded', () => {
    console.log('The Dom has loaded');
    
    const redInput = document.getElementById('red-input');
    redInput.addEventListener('input', redListener)

    const addItemButton = document.getElementById('add-item');
    addItemButton.addEventListener('click', addItemListener)

    const colorWheel = document.querySelector('#color-select');
    colorWheel.addEventListener('change', colorWheelListener)

    const removeButton = document.querySelector('#remove-listeners')
    removeButton.addEventListener('click', () => {
        redInput.removeEventListener('input', redListener)
        addItemButton.removeEventListener('click', addItemListener)
        colorWheel.removeEventListener('change', colorWheelListener)
    })
})

function redListener(event) {
    console.log(event.target.value)
    if (event.target.value.toLowerCase() === 'red') {
        event.target.setAttribute('style', 'background-color: red')
    } else {
        event.target.setAttribute('style', 'background-color: transparent')
    }
}

function addItemListener(event) {
    const list = document.querySelector('#section-2 > ul')
    const li = document.createElement('li');
    const input = document.getElementById('list-add').value;
    li.innerText = input;
    list.appendChild(li);
}

function colorWheelListener (event) {
    const div = document.querySelector('#section-3')
    div.setAttribute('style', `background-color: ${event.target.value}`)

}