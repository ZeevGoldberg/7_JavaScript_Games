const computerChoiceDisplay = document.getElementById('computer_choice');
const userChoiceDisplay = document.getElementById('user_choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = ` ${userChoice}`;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random()*3)+1;
    
    if (randomNumber===1){
        computerChoice='Rock';
    }
    if (randomNumber===2){
        computerChoice='Paper';
    }
    if (randomNumber===3){
        computerChoice='Scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice===userChoice){
        result = 'It is a draw!';
    }
    if (computerChoice==='Rock' && userChoice=="Scissors"){
        result = 'You Lose - HaHaHa!'
    }
    if (computerChoice==='Paper' && userChoice=="Rock"){
        result = 'You Lose - HaHaHa!'
    }
    if (computerChoice==='Scissors' && userChoice=="Paper"){
        result = 'You Lose - HaHaHa!'
    }
    if (computerChoice==='Paper' && userChoice=="Scissors"){
        result = 'You Win - Hooray!'
    }
    if (computerChoice==='Rock' && userChoice=="Paper"){
        result = 'You Win - Hooray!'
    }
    if (computerChoice==='Scissors' && userChoice=="Rock"){
        result = 'You Win - Hooray!'
    }
    resultDisplay.innerHTML = result
}