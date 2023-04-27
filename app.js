const computerChoiseDisplay = document.getElementById('computer-choise')
const userChoiseDisplay = document.getElementById('user-choise')
const resultDisplay = document.getElementById('result')
const possibleChoises = document.querySelectorAll('button')

const userPoint = document.getElementById('user_point')
const computerPoint = document.getElementById('computer_point')

let userChoise
let computerChoise
let result

let computerScore = 0
let userScore = 0
let playerWin = 2

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener("click", (e) => {
    userChoise = e.target.id
    userChoiseDisplay.innerHTML = userChoise
    generateComputerChoise()
    getResult()
    addPoint()
    checkWinner()
}))

function generateComputerChoise() {
    const randomNumber = Math.floor(Math.random() * possibleChoises.length) + 1 
    if (randomNumber === 1) {
        computerChoise = 'rock'
    }
    if (randomNumber === 2) {
        computerChoise = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoise = 'paper'
    }
    computerChoiseDisplay.innerHTML = computerChoise
}

function getResult() {
    if (computerChoise === userChoise) {
        result = 'its a draw!!'
        playerWin = 2
    }
    if (computerChoise === 'rock' && userChoise === 'paper') {
        result = 'You Win!!'
        playerWin = 1
    }
    if (computerChoise === 'rock' && userChoise === 'scissors') {
        result = 'You Lose!!'
        playerWin = 0
    }
    if (computerChoise === 'paper' && userChoise === 'rock') {
        result = 'You Lose!!'
        playerWin = 0
    }
    if (computerChoise === 'paper' && userChoise === 'rock') {
        result = 'You Lose!!'
        playerWin = 0
    }
    if (computerChoise === 'paper' && userChoise === 'scissors') {
        result = 'You Win!!'
        playerWin = 1
    }
    if (computerChoise === 'scissors' && userChoise === 'rock') {
        result = 'You Win!!'
        playerWin = 1
    }
    if (computerChoise === 'scissors' && userChoise === 'paper') {
        result = 'You Lose!!'
        playerWin = 0
    }
    resultDisplay.innerHTML = result
}

function addPoint() {
    switch (playerWin) {
        case 0:
            computerScore += 1
            computerPoint.innerHTML = computerScore;
            break;
        case 1:
            userScore += 1
            userPoint.innerHTML = userScore;
            break;
    
        default:
            break;
    }
}

function checkWinner() {
    if (userScore >= 5) {
        alert('User Win!')
        computerScore = 0
        userScore = 0
        resultContainer()
    }
    else if(computerScore >= 5) {
        alert('Computer Win!')
        computerScore = 0
        userScore = 0
        resultContainer()
    }
    else{
        return
    }
}  
function resultContainer() {
    computerPoint.innerHTML = computerScore;
    userPoint.innerHTML = userScore;
}
