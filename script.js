'use strict';

/*
console.log(
  (document.querySelector('.message').textContent = '🎉 Correct Number')
);
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 13;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // No Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    //Winning Moment
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    //Empliment HighScore
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //Change bg when win
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Change secretNumber box size when win
    document.querySelector('.number').style.width = '30rem';

    //Guess is Out of the Range
  } else if (guess > 20) {
    document.querySelector('.message').textContent = '❌ Out of the Range!';

    //Guess is not Correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost The Game!';
      score--;
      document.querySelector('.score').textContent = score;
      document.body.style.backgroundColor = 'red';
    }
  }

  //Guess is Too High

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost The Game!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.body.style.backgroundColor = 'red';
  //   }

  //Guess is Too Low

  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost The Game!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.body.style.backgroundColor = 'red';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
