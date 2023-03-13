/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image
        // console.log(url)

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split("/")[4]
        // console.log(breed)

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const dogCard = document.createElement('li');
        dogCard.innerHTML = `
                <figure>
                    <img src="${url}" />
                    <figcaption>${breed}</figcaption>
                </figure>
        `;
        // console.log(dogCard)
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const gallery = document.querySelector('.gallery > ul')
        // console.log(gallery)
        gallery.appendChild(dogCard)

    } catch (e) {
        console.log(e)
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});