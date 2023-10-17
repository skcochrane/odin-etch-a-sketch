const gridContainer = document.querySelector(".grid-container");

let squareTotal = 16;

function createGridSquares() {
  let gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  gridContainer.appendChild(gridSquare);
}

for (let i = 0; i < squareTotal * squareTotal; i++) {
  createGridSquares();
}

// CREATE FUNCTION TO DETERMINE SIZE OF GRID SQUARES. USE TO .style.height the GRID SQUARES!!
