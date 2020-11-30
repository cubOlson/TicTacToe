window.addEventListener('DOMContentLoaded', event => {
//main box grab
    const mainBox = document.getElementById('tic-tac-toe-board');

//player symbol
let currentPlayerSymbol = 'x';

//the big array
let squareValues = ['', '', '', '', '', '', '', '', ''];

//add image function
    let count = 0;

const imageAdder = (id) => {
    const img = document.createElement('img');
    if (count % 2 === 0){
        img.src = './player-x.svg';
        count++;
    } else {
        img.src = './player-o.svg';
        count++;
    }
    const thisOne = document.getElementById(id);
    thisOne.appendChild(img);
}

//add image click event
mainBox.addEventListener('click', event => {
    if (event.target.id.includes('square-')){
    const parseThis = event.target.id.slice(7);
    const parsed = Number.parseInt(parseThis);
        if (squareValues[parsed]){
            return;
        } else {
            const img = document.createElement('img');
            if (currentPlayerSymbol === 'x'){
                img.src = './player-x.svg';
                squareValues[parsed] = currentPlayerSymbol;
                currentPlayerSymbol = 'o';
            } else {
                img.src = './player-o.svg';
                squareValues[parsed] = currentPlayerSymbol;
                currentPlayerSymbol = 'x';
            }
            event.target.appendChild(img);
            console.log(squareValues);
        }
    } else {
        return;
    }
})




})
