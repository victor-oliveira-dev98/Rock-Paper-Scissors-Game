const computerChoiseDisplay = document.getElementById('computer-choise')
const userChoiseDisplay = document.getElementById('user-choise')
const resultDisplay = document.getElementById('result')
const possibleChoises = document.querySelectorAll('button')

let userChoise
let computerChoise
let result

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener("click", (e) => {
    userChoise = e.target.id
    userChoiseDisplay.innerHTML = userChoise
    generateComputerChoise()
    getResult()
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
        }
        if (computerChoise === 'rock' && userChoise === 'paper') {
            result = 'You Win!!'
        }
        if (computerChoise === 'rock' && userChoise === 'scissors') {
            result = 'You Lose!!'
        }
        if (computerChoise === 'paper' && userChoise === 'rock') {
            result = 'You Lose!!'
        }
        if (computerChoise === 'paper' && userChoise === 'rock') {
            result = 'You Lose!!'
        }
        if (computerChoise === 'paper' && userChoise === 'scissors') {
            result = 'You Win!!'
        }
        if (computerChoise === 'scissors' && userChoise === 'rock') {
            result = 'You Win!!'
        }
        if (computerChoise === 'scissors' && userChoise === 'paper') {
            result = 'You Lose!!'
        }
        resultDisplay.innerHTML = result
    }