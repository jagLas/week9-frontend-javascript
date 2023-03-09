export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    window.document.title = "James's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    document.body.children[0].children[0].innerText = "James's Portfolio"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    const aboutMe = document.body.children[1]
    const p1 = aboutMe.children[1];
    const p2 = aboutMe.children[2];

    p1.innerText = `Now, this is a story all about how
    My life got flipped-turned upside down
    And I'd like to take a minute
    Just sit right there
    I'll tell you how I became the prince of a town called Bel-Air`;

    p2.innerText = `In West Philadelphia born and raised
    On the playground was where I spent most of my days
    Chillin' out, maxin', relaxin', all cool
    And all shootin' some b-ball outside of the school
    When a couple of guys who were up to no good
    Started making trouble in my neighborhood
    I got in one little fight and my mom got scared
    She said, "You're movin' with your auntie and uncle in Bel-Air"`
}