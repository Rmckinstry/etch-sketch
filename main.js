const container = document.querySelector('.container');

let userInput = prompt("Enter Board Size. 1 - 100");

generateBoard(userInput)

function generateBoard(size){
    const boardLength = Number(size);
    const boardArea = boardLength*boardLength;

    container.style.gridTemplateColumns = `repeat(${boardLength},1fr)`;

    for(let i=0;i<boardArea;i++){
        const div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('div-style')
    }
}

/////////////////

let squares = document.querySelectorAll('.div-style');

squares.forEach((square) => {
    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor ='black';
    })
});

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',()=>{
    clearBoard(squares)
})

function clearBoard(board){
    board.forEach((square)=>{
        square.style.backgroundColor='white';
    })
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}