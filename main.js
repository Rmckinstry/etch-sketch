function generateBoard(size) {
  const boardLength = Number(size);
  const boardArea = boardLength * boardLength;

  container.style.gridTemplateColumns = `repeat(${boardLength},1fr)`;

  for (let i = 0; i < boardArea; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("div-style");
  }

  eventAdder();
}

function eventAdder() {
  let squares = document.querySelectorAll(".div-style");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = color;
    });
  });
}

function clearBoard() {
  do {
    container.removeChild(container.firstChild);
  } while (container.firstChild);

  let newInput = "";
  do {
    newInput = prompt("Enter New Board Size. 1 - 100");
  } while (!(newInput > 0 && newInput < 101 && newInput % 1 == 0)); //accepts only nums 1-100

  generateBoard(newInput);
}

// first board code
const container = document.querySelector(".container");
let userInput = "";
let color = '#fce94f'
do {
  userInput = prompt("Enter Board Size. 1 - 100");
} while (!(userInput > 0 && userInput < 101 && userInput % 1 == 0));

generateBoard(userInput);

let clearBtn = document.querySelector("#clear");
10;
clearBtn.addEventListener("click", () => {
  clearBoard();
});

let colorPicker = document.querySelector("#color-selection");
colorPicker.addEventListener("input", (e) => {
  color = (e.target.value);
});
