
let totalScore = {playerScore:0, computerScore:0}

// First i want to grab values from computer and player

// how computer is choose things using random method

function getComputerChoice(){
  rpsChoice = ['Rock', 'Paper', 'Scissors']
  const compChoice = Math.floor(Math.random()* rpsChoice.length)
  return rpsChoice[compChoice]
}
// console.log(getComputerChoice())

function getResult(playerChoice, computerChoice){
  score = 0;
  // when player wins
  if (playerChoice == 'Rock'&& computerChoice == 'Scissors'){
    score = 1
  }else if (playerChoice == 'Paper'&& computerChoice == 'Rock'){
    score = 1
  }else if (playerChoice == 'Scissors'&& computerChoice == 'Paper'){
    score = 1
    // when both choose same
  }else if (playerChoice == computerChoice){
    score = 0
    // when computer wins
  } else{
    score = -1
  }
  return score
}

function showResult(score,playerChoice,computerChoice){
  const scoreDiv = document.getElementById('player-score')
  const handSelectDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')

  if (score == 1){
    resultDiv.innerText = 'You Won !'
  }else if(score == 0){
    resultDiv.innerText = 'You Drew !'
  }else if(score == -1){
    resultDiv.innerText = 'You Lose !'
  }
  scoreDiv.innerText = `👦${totalScore['playerScore']} VS 🤖${totalScore['computerScore']}`
  handSelectDiv.innerText = `👦${playerChoice} VS 🤖${computerChoice}`
  
}
// we are telling what events to happen after click of our buttons OR we are using all above functions to play game
function onClickRPS(playerChoice){
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice,computerChoice)
  totalScore['playerScore'] += score
  totalScore['computerScore'] -= score
  showResult(score,playerChoice,computerChoice)

  const instructionDiv = document.getElementById('instruction')
  instructionDiv.innerText = ''
}

function playGame(){
  const rpsButton = document.querySelectorAll('.rpsButton')

  rpsButton.forEach(rpsButton =>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
  const enGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = ()=> endGame(totalScore)
}

function endGame(totalScore){
  const scoreDiv = document.getElementById('player-score')
  const handSelectDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')

  scoreDiv.innerText = ''
  handSelectDiv.innerText = ''
  resultDiv.innerText = ''

  totalScore['playerScore'] = 0
}
playGame()