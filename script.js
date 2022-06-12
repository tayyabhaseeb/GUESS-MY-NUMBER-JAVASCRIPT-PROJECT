'use strict';

// document.querySelector('.number').textContent = '12';

// // let guess = document.querySelector('.guess').value;
// let message = document.querySelector('.message').textContent;

// let score = document.querySelector('.score').textContent;

// let highScore = document.querySelector('.highscore').textContent;

/////////////////////////////////////////////////////

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);
let score = 20;
let highScore = 0;

//////////////////////////////////////////////////////////

const refactor = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const refactor2 = function () {
  document.querySelector('.message').textContent = 'YOU LOST THE GAME';
};

/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// CHECK BUTTON

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER !';
    ////////////////////////////////////////////////////////////////////
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER :)';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;

    /////////////////////////////////////////////////////
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH :)';
      // score--;
      // document.querySelector('.score').textContent = score;
      refactor();
    } else {
      // document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      refactor2();
    }

    ////////////////////////////////////////////////////////////
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW :)';
      // score--;
      // document.querySelector('.score').textContent = score;
      refactor();
    } else {
      // document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      refactor2();
    }
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// AGAIN BUTTON EVENT
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
