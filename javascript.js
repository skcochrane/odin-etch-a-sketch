const gridContainer = document.querySelector(".grid-container");

function createGridSquares() {
  let gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  let squareSize = 450 / squaresPerSide - 1;
  gridSquare.style.height = squareSize + "px";
  gridSquare.style.width = squareSize + "px";
  gridContainer.appendChild(gridSquare);
}

let createGrid = function (squaresPerSide) {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    createGridSquares();
  }
};

const changeBtn = document.querySelector(".change-btn");
changeBtn.addEventListener("click", function () {
  promptResponse = prompt(
    "Enter a whole number between 1 and 100 to change the number of squares per side of the grid: "
  );
  squaresPerSide = Number(promptResponse);
  gridContainer.innerHTML = "";
  gridContainer = createGrid(squaresPerSide);
});

let squaresPerSide = 16;
gridContainer = createGrid(squaresPerSide);

// CHANGE BACKGROUND COLOR OF GRID SQUARE UPON HOVER

// RESET BUTTON

//BONUS == DARKEN BY 10% EVER HOVER
