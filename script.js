'use strict';

// Select elements
const body = document.querySelector('body');
const scoreBoard = document.querySelector('.score');
const againButton = document.querySelector('.again');
const buttonCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
highScore.textContent = 0;
let bestScore = 0;

// Calculate secret Number
let number = Math.ceil(Math.random() * 20);
let secretNumber = document.querySelector('.number');

let score = 20;

// function to change message
const displayMessage = function (text) {
  message.textContent = text;
};

// Event Listener when user inputs the guess number

buttonCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (guess == false) {
    displayMessage('no number');
  } else if (guess > number) {
    if (score > 1) {
      displayMessage('Too high');
      score--;
      scoreBoard.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreBoard.textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      displayMessage('Too low');
      score--;
      scoreBoard.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreBoard.textContent = 0;
    }
  } else {
    displayMessage('BINGO');

    scoreBoard.textContent = score;
    if (bestScore < score) {
      bestScore = score;
      highScore.textContent = bestScore;
    }

    body.style.backgroundColor = 'green';
    secretNumber.style.width = '30rem';
    secretNumber.textContent = number;
  }
  console.log('scoreBoard:' + scoreBoard.textContent);
});

// Event listener when user plays again

againButton.addEventListener('click', () => {
  number = Math.ceil(Math.random() * 20);
  const guess = document.querySelector('.guess');
  guess.value = '';
  body.style.backgroundColor = '#222';
  score = 20;
  scoreBoard.textContent = score;
  secretNumber.textContent = '?';
  secretNumber.style.width = '15rem';
  displayMessage('Start guessing...');
  highScore.textContent = bestScore;
});
