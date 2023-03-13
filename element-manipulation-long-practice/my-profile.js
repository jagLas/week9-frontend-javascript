
window.onload = () => {
    console.log('this is my profile page')
    document.body.innerHTML = `
    <h1>James</h1>
    `

    const listItems = [
        `I'm learning how to code`,
        `This page is to practice adding html via javscript`,
        `I'm looking forward to this exciting change in careers`,
        `I have refactored this list to use an array`,
        `Enjoy the page`
    ]

    let firstList = createUnorderedList(listItems);
    document.body.appendChild(firstList)
}

function createUnorderedList(listItems) {
    let newUl = document.createElement('ul');
    listItems.forEach(item => {
        const newLi = document.createElement('li');
        newLi.innerText = item;
        newUl.appendChild(newLi);
    })

    return newUl;
}