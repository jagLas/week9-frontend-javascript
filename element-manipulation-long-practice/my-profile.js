
window.onload = () => {
    console.log('this is my profile page')
    document.body.innerHTML = `
    <h1>James</h1>
    `

    let newUl = document.createElement('ul');
    document.body.appendChild(newUl)

    let newLi = document.createElement('li');
    newLi.innerText = `I'm learning how to code`;
    newUl.appendChild(newLi);
 
    newLi = document.createElement('li');
    newLi.innerText = `This page is to practice adding html via javscript`;
    newUl.appendChild(newLi);

    newLi = document.createElement('li');
    newLi.innerText = `I'm looking forward to this exciting change in careers`;
    newUl.appendChild(newLi);

    newLi = document.createElement('li');
    newLi.innerText = `Enjoy the page`;
    newUl.appendChild(newLi);
}