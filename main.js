const container = document.querySelector('.container');

let input = 4;
let count = input*input;

container.style.gridTemplateColumns = `repeat(${input},1fr)`;

for(let i=0;i<count;i++){
    const div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('div-style')
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
}