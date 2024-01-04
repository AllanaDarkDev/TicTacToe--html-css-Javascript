//Primeiro Desafio
let paragraf = document.getElementById('playerTurn')
let pos1 = document.getElementById('position1');
let pos2 = document.getElementById('position2');
let pos3 = document.getElementById('position3');
let pos4 = document.getElementById('position4');
let pos5 = document.getElementById('position5');
let pos6 = document.getElementById('position6');
let pos7 = document.getElementById('position7');
let pos8 = document.getElementById('position8');
let pos9 = document.getElementById('position9');

let board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
let boardDivs = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9]
let player = ''
player = playerSort()
updatePlayerP()

function gameFlow(position) {

    addToArray(position, player, board)
    
    let victory = victoryCondition()
    let velha = isVelha(victory)

    updateBoard(board, victory, velha);
    
    player = playerSort()

    updatePlayerP(victory, velha)
}

function playerSort() {
    
    if (player === '') {
        sortedNum = Math.floor(Math.random() * 2) + 1
        if (sortedNum == 1) {
            return 'X'
        } else {
            return 'O'
        }
    } else {
        if (player === 'X') {
            return 'O'
        } else {
            return 'X'
        }
    }
}

function updatePlayerP(victoryCondition, velhaCondition) {
    
    if (velhaCondition){
        paragraf.innerHTML = 'TIE!'
        for(let div of boardDivs){
            div.removeAttribute('class')
            div.setAttribute('class', 'tie')
        }
    }else if (!victoryCondition) {
        paragraf.innerHTML = "Player: "
        paragraf.innerHTML += `${player}`
    }
    
    
}

function updateBoard(gameBoard, victoryCondition){
    for(let i = 0 ; i <= 8; i++ ){
        boardDivs[i].innerText = gameBoard[i]
        
            if(gameBoard[i] !== "-" && !victoryCondition){
                boardDivs[i].disabled = true;
                boardDivs[i].setAttribute('class', 'btnInactive')
            }
    
            if(gameBoard[i] === "-"){
                boardDivs[i].innerText = ""
                boardDivs[i].disabled = false;
            }
            if (victoryCondition) {
                boardDivs[i].disabled = true;
                paragraf.innerHTML = `Player ${player} won!`
            }
            
        }    
}

function addToArray(position, actualPlayer, gameBoard) {
    gameBoard[position] = actualPlayer
}

function victoryCondition() {
    let victor;
    for (let rCells = 0; rCells <= 6; rCells += 3) {
        if (board[rCells] !== '-' && board[rCells + 1] === board[rCells] && board[rCells + 2] === board[rCells]) {
            victor = board[rCells]
            if (victor === 'X') {
                boardDivs[rCells].removeAttribute('class')
                boardDivs[rCells + 1].removeAttribute('class')
                boardDivs[rCells + 2].removeAttribute('class')
                boardDivs[rCells].setAttribute('class', 'xVictory')
                boardDivs[rCells + 1].setAttribute('class', 'xVictory')
                boardDivs[rCells + 2].setAttribute('class', 'xVictory')
            }else{
                boardDivs[rCells].removeAttribute('class')
                boardDivs[rCells + 1].removeAttribute('class')
                boardDivs[rCells + 2].removeAttribute('class')
                boardDivs[rCells].setAttribute('class', 'oVictory')
                boardDivs[rCells + 1].setAttribute('class', 'oVictory')
                boardDivs[rCells + 2].setAttribute('class', 'oVictory')
            }
            return true
        }
    }
    for (let cCells = 0; cCells <= 2; cCells++) {
        if (board[cCells] !== '-' && board[cCells + 3] === board[cCells] && board[cCells + 6] === board[cCells]) {

            victor = board[cCells]
            if (victor === 'X') {
                boardDivs[cCells].removeAttribute('class')
                boardDivs[cCells + 3].removeAttribute('class')
                boardDivs[cCells + 6].removeAttribute('class')
                boardDivs[cCells].setAttribute('class', 'xVictory')
                boardDivs[cCells + 3].setAttribute('class', 'xVictory')
                boardDivs[cCells + 6].setAttribute('class', 'xVictory')
            }else{
                boardDivs[cCells].removeAttribute('class')
                boardDivs[cCells + 3].removeAttribute('class')
                boardDivs[cCells + 6].removeAttribute('class')
                boardDivs[cCells].setAttribute('class', 'oVictory')
                boardDivs[cCells + 3].setAttribute('class', 'oVictory')
                boardDivs[cCells + 6].setAttribute('class', 'oVictory')
            }
            return true
        }
    }

    if (board[0] !== '-' && board[4] === board[0] && board[8] === board[0]) {
        victor = board[0]
            if (victor === 'X') {
                boardDivs[0].removeAttribute('class')
                boardDivs[4].removeAttribute('class')
                boardDivs[8].removeAttribute('class')
                boardDivs[0].setAttribute('class', 'xVictory')
                boardDivs[4].setAttribute('class', 'xVictory')
                boardDivs[8].setAttribute('class', 'xVictory')
            }else{
                boardDivs[0].removeAttribute('class')
                boardDivs[4].removeAttribute('class')
                boardDivs[8].removeAttribute('class')
                boardDivs[0].setAttribute('class', 'oVictory')
                boardDivs[4].setAttribute('class', 'oVictory')
                boardDivs[8].setAttribute('class', 'oVictory')
            }
        return true
    }

    if (board[2] !== '-' && board[4] === board[2] && board[6] === board[2]) {
        victor = board[0]
            if (victor === 'X') {
                boardDivs[2].removeAttribute('class')
                boardDivs[4].removeAttribute('class')
                boardDivs[6].removeAttribute('class')
                boardDivs[2].setAttribute('class', 'xVictory')
                boardDivs[4].setAttribute('class', 'xVictory')
                boardDivs[6].setAttribute('class', 'xVictory')
            }else{
                boardDivs[2].removeAttribute('class')
                boardDivs[4].removeAttribute('class')
                boardDivs[6].removeAttribute('class')
                boardDivs[2].setAttribute('class', 'oVictory')
                boardDivs[4].setAttribute('class', 'oVictory')
                boardDivs[6].setAttribute('class', 'oVictory')
            }
        return true
    }
    return false
}

function isVelha(victory) {
    if (victory) {
        return false
    } 
    
    for (let bcells of board) {
        if (bcells === '-') {
            return false
        }
    }
    return true
}
