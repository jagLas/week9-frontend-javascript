const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seeded = document.body.getElementsByClassName('seed');
    console.log(seeded);

    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.body.getElementsByClassName('seedless');
    console.log(seedless);

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = document.body.getElementsByClassName('seedless')[0];
    console.log(firstSeedless);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    let spans = document.body.getElementsByTagName('span')
    let filtered = Array.prototype.filter.call(
        spans,
        span => span.innerText === 'you'
    )
    console.log(filtered)

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapper = document.getElementById('wrapper')
    const wrapperChildren = wrapper.children;
    console.log(wrapperChildren)

    // 6. Get all odd number list items in the list
    // Your code here
    // const ol = document.getElementsByTagName('ol');
    const oddLis = document.querySelectorAll('ol > li.odd');
    console.log(oddLis);


    // 7. Get all even number list items in the list
    // Your code here
    const evenLis = document.querySelectorAll(`ol > li:not(.odd)`);
    console.log(evenLis)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    // 9. Get "Amazon" list element
    // Your code here

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
}

window.onload = select;