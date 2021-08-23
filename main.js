const container = document.querySelector('.container');

let input = 4;
let count = input*input;

container.style.gridTemplateColumns = `repeat(${input},1fr)`;

for(let i=0;i<count;i++){
    const div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('div-style')
}