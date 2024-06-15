let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "Drawing enabled";
            }
            else {
                draw.innerHTML = "Drawing disabled";
            }
        }
    })


    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getNumSquares();
        createGrid(size);
    })
})

function createGrid(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }

}

/* Add a button that will send the user a popup asking for the number of squares per
side of the new grid */
/*document.querySelector('#popup').addEventListener('click', promptMe);*/

function getNumSquares() {
   let input = prompt("Input number of grid squares for rows and columns");
    let message = document.querySelector("#message");
    if(input == "") {
        message.innerHTML = "Please provide a number";
    }
    else if(input < 2 || input > 100) {
        message.innerHTML = "Please provide a number between 2 and 100"
    }
    else {
        message.innerHTML = "Excellent. Now start drawing :)"
        return input;
    }
    // Once entered, the existing grid should be removed, and a new grid geenerated.
    // Set a limit for the user input to a maximum of 100x100 squares.
}

function colorDiv() {
    if(click) { 
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            } else {
                this.style.backgroundColor = color;
            } 
    }
}
        

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}