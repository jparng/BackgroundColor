const button = document.querySelector('button')
const body = document.querySelector('body')
const hexValues =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const value = document.querySelector('#hex-value')


button.addEventListener('click', changeColor)

function changeColor(){
    let hex = '#'

    for(let i = 0; i < 6; i++){
        const index = parseInt(Math.random()*hexValues.length);
        hex += hexValues[index];
    }
    value.textContent = hex;
    body.style.backgroundColor = hex;
}