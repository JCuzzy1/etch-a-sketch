let color = "black"; // global variable. default color is black.
let click = false; // global variable. default is the click function will be off. User will need to click to activate.

/* Use DOMContentLoaded event listener so that the html and css loads before the javascript.
Helps to prevent crashing. */
document.addEventListener("DOMContentLoaded", function() { 
    createGrid(16); // default number of squares: 16*16.

    // to be able to turn the draw function on and off by clicking on the body of the page.
    document.querySelector("body").addEventListener("click", function(e) { // pass an event (e) into the function.
        if(e.target.tagName != "BUTTON") { // the body of the page represents the button.
            click = !click; // if click is true, click is not true (click to turn on, click to turn off).
            let draw = document.querySelector("#draw"); // create a draw variable
            if(click) {
                draw.innerHTML = "Drawing enabled"; // display message to user
            }
            else {
                draw.innerHTML = "Drawing disabled"; // display message to user
            }
        }
    })

// create variable for the popup button.
// Add an event listner that triggers a function at the even of a click.
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getNumSquares(); // create a variable (size). call the function getNumSquares.
        createGrid(size); // number of squares user inputs 
    })
})

// Create grid using the css grid method.
function createGrid(size) {
    let board = document.querySelector(".board"); // create variable called board.
    // Run the query.selector command to capture the .board div from the html file.

    // Style the board using the CSS grid-template-columns Property.
    // This specifies the number (and the widths) of columns in a grid layout.

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // originally set at repeat 16 to create the required 16x16. Changed to tick quotes ${size} to allow number to change.
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`; // rows match the number of columns

    let numDivs = size * size; // create variable to determine number of columns/rows (squares) within the board/grid.

    
    for(let i = 0; i < numDivs; i++) { // Use a for loop to iterate through each square.
        let div = document.createElement("div"); // create a new div.
        div.addEventListener("mouseover", colorDiv); // mouse hover using the colorDiv function (below)
        board.insertAdjacentElement("beforeend", div); // use inser adjacent element to insert colors to the board.
    }

}

/* Add a button that will send the user a popup asking for the number of squares per
side of the new grid */

// Use Window.prompt() to get the user input.
// Create a function with if conditions to set limits as to what user can input.
// Limit for the user input is a maximum of 100x100 squares.
// Create error message pop ups for invalid entries.

function getNumSquares() { 
   let input = prompt("Input number of grid squares for rows and columns");
    let message = document.querySelector("#message");
    if(input == "") {
        message.innerHTML = "Please provide a number"; // error message should user click 'ok' without entering a value.
    }
    else if(input < 2 || input > 100) {
        message.innerHTML = "Please provide a number between 2 and 100" // error message should user enter a number below 2 or greater than 100.
    }
    else {
        message.innerHTML = "Excellent. Now start drawing :)" // successful message.
        return input; // console will confirm input value
    }
    
    
}
// create function with if conditions to determine grid colors at event of a click (from the user).
function colorDiv() {
    if(click) { 
        if(color === 'random') { // random multi colour effect formula below
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            } else {
                this.style.backgroundColor = color; // setColor function will determine color
            } 
    }
}
        
// create function to set the color. default is black (see global variable above)
function setColor(colorChoice) {
    color = colorChoice;
}

// Once entered, the existing grid should be removed, and a new grid geenerated.
function resetBoard() {
    let divs = document.querySelectorAll("div") // create value divs, query select all selects all of the grid squares
    divs.forEach((div) => div.style.backgroundColor = "white") // use a forEach array to execute all of the elements (color all squares white (same as the background color))
}