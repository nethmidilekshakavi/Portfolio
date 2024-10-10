// JavaScript function to load content based on the topic clicked
function loadContent(topic) {
    let contentBox = document.getElementById("content-box");

    switch (topic) {
        case 'assignment1':
            contentBox.innerHTML = `
                <h2>Assignment 01</h2>
                <p>This assignment focuses on creating a portfolio website using only HTML. Proper content structuring and sectioning is key.</p>
            `;
            break;
        case 'assignment2':
            contentBox.innerHTML = `
                <h2>Assignment 02</h2>
                <p>This assignment involves designing layouts using CSS positioning and grid, ensuring responsiveness and stability during resizing.</p>
            `;
            break;
        case 'assignment3':
            contentBox.innerHTML = `
                <h2>Assignment 03</h2>
                <p>In this assignment, I implemented animations and transitions to enhance user experience on the website.</p>
            `;
            break;
        case 'assignment4':
            contentBox.innerHTML = `
                <h2>Assignment 04</h2>
                <p>This assignment is about integrating APIs to fetch and display dynamic data on the website in a user-friendly format.</p>
            `;
            break;
        default:
            contentBox.innerHTML = "<p>Select an assignment from the navigation bar above to load the content.</p>";
    }
}
