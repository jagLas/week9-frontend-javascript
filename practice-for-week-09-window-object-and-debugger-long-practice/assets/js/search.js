export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
    const queue = [];
    queue.push(...document.body.children)

    while (queue.length > 0) {
        const element = queue.shift();

        if (element.id === id) {
            return element;
        }

        if(element.children.length > 0) {
            queue.push(...element.children);
        }
    }

    return 'not found';
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
    const queue = [];
    queue.push(...document.body.children)

    while (queue.length > 0) {
        const element = queue.shift();

        if (element.tagName === tag) {
            return element;
        }

        if(element.children.length > 0) {
            queue.push(...element.children);
        }
    }

    return 'not found';
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
    const queue = [];
    queue.push(...document.body.children)

    while (queue.length > 0) {
        const element = queue.shift();

        if (element.classList.contains(cls)) {
            return element;
        }

        if(element.children.length > 0) {
            queue.push(...element.children);
        }
    }

    return 'not found';
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
    const elements = [];
    const queue = [];
    queue.push(...document.body.children)

    while (queue.length > 0) {
        const element = queue.shift();

        if (element.tagName === tag) {
            elements.push(element);
        }

        if(element.children.length > 0) {
            queue.push(...element.children);
        }
    }

    return elements;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
    const elements = [];
    const queue = [];
    queue.push(...document.body.children)

    while (queue.length > 0) {
        const element = queue.shift();

        if (element.classList.contains(cls)) {
            elements.push(element);
        }

        if(element.children.length > 0) {
            queue.push(...element.children);
        }
    }

    return elements;
}