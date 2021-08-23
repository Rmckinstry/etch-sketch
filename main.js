const container = document.querySelector('.container');

let input = 64;
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
