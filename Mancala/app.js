let state = {};

//********************** DOM Selectors and Create Elements *****************************
const body = document.body

const title = document.createElement('h1');
title.setAttribute('class', 'title');

const boardBox = document.createElement('div');
boardBox.setAttribute('class', 'board-box');



function buildInitialState(){
    state.ends = [0,0]
    state.board = [[4,4,4,4,4,4],[4,4,4,4,4,4]]

    title.textContent = 'Mancala'
    body.appendChild(title)

    

    
}

function renderPlayerBox(){
    const playerBox = document.createElement('div');
    playerBox.setAttribute("class", "player-box"); 
    body.appendChild(playerBox)

    const playerOne = document.createElement('h3');
    playerOne.setAttribute('class', 'players');
    playerOne.textContent = 'Player One:';
    playerBox.appendChild(playerOne);

    const playerTwo = document.createElement('h3');
    playerTwo.setAttribute('class', 'players');
    playerTwo.textContent = 'Player Two:';
    playerBox.appendChild(playerTwo);

}
function renderBoard(){
    body.appendChild(boardBox)

    const endCapOne = document.createElement('div')
    endCapOne.setAttribute('class', 'endCaps');
    endCapOne.innerText = state.ends[0]
    boardBox.appendChild(endCapOne)
    
    const boxesBox = document.createElement('div')
    boxesBox.setAttribute('class', 'boxes-box');
    boardBox.appendChild(boxesBox)

    let k = 0
    for (let i=0; i<state.board.length; i++){
        for (let j=0; j<state.board[i].length; j++){
        const box = document.createElement('div')
        box.setAttribute('class', 'box');
        box.value = k
        k++
        box.innerText= state.board[i][j]
        boxesBox.appendChild(box)
        console.log(box)
    }
}
    const endCapTwo = document.createElement('div')
    endCapTwo.setAttribute('class', 'endCaps');
    endCapTwo.innerText = state.ends[1]
    boardBox.appendChild(endCapTwo)

}


buildInitialState()
renderPlayerBox()
renderBoard()

const playerBox = document.querySelector(".board-box")

const winConditions =() =>{
    
}

const playerClick = (e) => {
    if (e.target.className !== "endCaps"){
        console.log(e.target.value)
    }
}

playerBox.addEventListener("click", playerClick)

