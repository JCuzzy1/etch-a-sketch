# etch-a-sketch
Created a new repos called etch-a-sketch and clones it to my machine. Created a html, css, and javascript file.

Populated html with a title and linked my style sheet in the head section. Created a div container in the body section. Called it flex-container.
Created a h1 (title) header, (grid) board, and buttons for each colour I wanted for my grid (black, red, blue, white (as an eraser), random (rainbow effect)), and a reset button.
Researched how to create a promptMe onclick button as the popup for a user to input number of squares for the grid. Did this.
Included a footer.

Populated the js file with corresponding code for my promptMe button. Tested it on the live page. Seemed to be working. Didn't yet include any code to guard against the user
inputting an invalid entry. Would come back to that later.

Researched how to create the grid with flexbox. Only examples I found seemed long-winded and overly complex so went with the CSS Grid method. Although I haven't learned this on the
course so far. Seemed the most efficient way to go. Actually used a combination of flexbox to style the page and css grid for the grid.
Styled the flex-container, popup button, grid (height/width/border/colour/margins), buttons, and footer.
I wanted to make it more fancy from the beginning and sourced some styling code but couldn't get it to work so left it until later and carried on with a more basic look.

Back to my js file to create the 16x16 grid. Again, I had to research how best to do this. I created a variable for my grid (board): let board = document.querySelector(".board");
and used the gridTemplateColumns and gridTemplateRows property methods to specify the number of columns and rows on the grid layout. I put 'repeat(16, 1fr)': for both which means
repeating grid squares 16 times (coloumns and rows) with each being 1/16th of the grid board. Thus creating my 16x16 grid.

The grid needs to be dynamic and be able to change to up to whatever number of squares a user inputs, so I created a function for the above code. I called it createGrid.
'repeat(16, 1fr)' changed to `repeat(${size}, 1fr)` for both columns and rows. And I created a variable for the number of squares the user inputs called numDivs
(short for number of divs / or number or squares) let numDivs = size * size;. So if the user inputs 10, numDivs with be a grid of 10*10.
I tested this but my page was not showing the squares within my board. Racked my brain for ages trying to figure out what I was doing wrong. Then realised there was no input value (duh).
I gave it value by putting createGrid(32); at the top of my js code and then tested it and it showed a grid of 32*32 squares. Function working so far!

Had to research how best to go about getting the page to accept the input from a user and apply it to the grid. A for loop to iterate through each div/square: for(let i = 0; i < numDivs; i++)
then create a new div. let div = documentcreateElement("div"). And to insert this into my grid I used the insertAdjacent method. board.insertAdjacentElement("beforeend", div);

Now to get the prompt to only accept numbers between 2 and 100 and to reject an empty entry. I put my prompt code inside a function called getNumSquares().
I created a variable called 'message' and had to add this as a p tag in my html file. Just under the popup button code.
I then added an if statement.
if(input == "" { message.innerHTML = 'Please provide a number':
} else if(input < 2 || input > 100) { message.innerHTML = 'Please provide a number netween 2 and 100' }.
I tested this using my popup button and it worked but was clunky as it repeated the entry every time before executing. Also the cancel button was producing a 'null' message.

I cleaned up my input prompt popup code by using more efficient version.  Getting rid of promptMe and the alert and simply replacing it with let input = prompt('example text');. I created
an event listener for the popup linking it to my getNumSquares function and my createGrid function.
let btn_popup = document.querySelector('#popup');
btn_popup.addEventListener('click', function() {
  let size = getNumSquares();
  createGrid(size);
})
I had to make a slight tweak to the html as well (onclick='getNumSquares'). This worked better. Correct messages were displayed when incorrect and correct entries were made.

The next step was to create the draw function. I added an event listener to the for loop section of my createGrid function. Just above board.insertAdjacentElement().
div.addEventListener("mouseover", function()) {
div.style.backgroundColor = "black"
}
I tested this and it worked.

Now I needed to be able to change colour by clicking my colour buttons. I created two functions. The first: colorDiv. To get my mouse hover to create the color effect.
I changed my event listener code to:
div.addEventListener("mouseover", colorDiv() {
}
The second function: setColor. To set the color. setColor(colorChoice) {
let color = colorChoice
}
And I created a global variable: let color = "black". This will be the default color.

I then had to go back onto the html file and insert onclick="setColor" to all my colour button tags. onclick="setColor('black')" for the black button and so on for the other colors.

Back in the js file I created if conditions in the colorDiv function. I wanted to create the random colour choice first so had to research how to do that.
I found the following math.random code:
if(click) {
  if(color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}    else {
      this.style.backgroundColor = color;
}
}

The else part of the above corresponds with the other colors I have buttons for (black, red, blue, white (my eraser)).

Tested this and it works!

Created a reset function to activate my 'clear' button. Called it resetBoard(). Created a variable called divs and a queryselectorAll("div") to select all my divs. Then used
a for each loop so the function would iterate through each div (square) in the grid and change it to white.  divs.forEach((div) => div.style.backgroundColor = "white").
Back in the html file I inserted onclick="resetBoard()" to my clear button.
Tested this - it works!

Task complete but I want to allow the user to switch the drawing mechanism on and off.
Created a global variable let click = false; this is so the page has a default setting where drawing is disabled. I researched what code to add. Created a variable let draw and
added a p id tag called draw in my html underneath the message tag. The code includes an event listener click function event target.
And I included the message text: Drawing enabled / Drawing disabled inside if conditions.

It works!

Next step is to style the page...



