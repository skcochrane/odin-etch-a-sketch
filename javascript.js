const gridContainer = document.querySelector(".grid-container");

let squaresPerSide = 16;

function createGridSquares() {
  let gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  let squareSize = 500 / squaresPerSide - 1;
  gridSquare.style.height = squareSize + "px";
  gridSquare.style.width = squareSize + "px";
  gridContainer.appendChild(gridSquare);
}

for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
  createGridSquares();
}

// CREATE BUTTON TO PROMPT USER TO PICK SIZE OF GRID -- LOOK AT INSTRUCTIONS FOR PARAMETERS -- OR INPUT BOX DIRECTLY ON PAGE

// CHANGE BACKGROUND COLOR OF GRID SQUARE UPON HOVER

// RESET BUTTON

//BONUS == DARKEN BY 10% EVER HOVER
