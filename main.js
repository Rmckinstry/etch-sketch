function generateBoard(size){
    const boardLength = Number(size);
    const boardArea = boardLength*boardLength;

    container.style.gridTemplateColumns = `repeat(${boardLength},1fr)`;

    for(let i=0;i<boardArea;i++){
        const div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('div-style')
    }

    eventAdder()
}

function eventAdder(){
    let squares = document.querySelectorAll('.div-style');
    squares.forEach((square) => {
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor ='black';
        })
    });

}

function clearBoard(){
    do{
        container.removeChild(container.firstChild);
    } while(container.firstChild);

    const newInput = prompt("Enter New Board Size. 1 - 100");
    generateBoard(newInput);
}

// first board code
const container = document.querySelector('.container');
let userInput = prompt("Enter Board Size. 1 - 100");

generateBoard(userInput)

let clearBtn = document.querySelector('#clear');10
clearBtn.addEventListener('click',()=>{
    clearBoard()
})
