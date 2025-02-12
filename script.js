'use strict'


// document.querySelector('.message').textContent = 'Ali';
// Generate Random Number

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;

// document.querySelector('.secret-number').textContent = secretNumber;

document.querySelector('.retry').setAttribute('disabled', "disabled");

document.querySelector('.check').addEventListener('click', function () {

  let guess = Number(document.querySelector('.guess-number').value);
  console.log(guess, typeof guess);


  //When there is no value
  if (!guess) {
    document.querySelector('.message').textContent = 'You must add number to guess';

    document.querySelector('.message').style.color = 'red';
  } else if (guess === secretNumber) {
    document.querySelector('.secret-number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Congratulation! You GUESS the Right Number';
    document.querySelector('.highscore').textContent = score * 5;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').style.color = 'red';
    document.querySelector('.secret-number').style.backgroundColor = '#e74c3c';
    document.querySelector('.retry').classList.remove('btn-secondary');
    document.querySelector('.retry').classList.add('btn-warning');
    // document.querySelector('.check').classList.remove('btn-danger');
    document.querySelector('.check').setAttribute('disabled', "disabled");
    document.querySelector('.retry').removeAttribute('disabled', 'disabled')

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'You should guess lower Number';
      score--;
      document.querySelector('.score').textContent = score;

      document.querySelector('.message').style.color = 'red';
    } else {
      document.querySelector('.message').textContent = 'Game Over, Good luck for Next Time';
      document.querySelector('.score').textContent = 0;

      document.querySelector('.message').style.color = 'red';
      document.querySelector('.retry').removeAttribute('disabled', 'disabled');
      document.querySelector('.check').setAttribute('disabled', 'disabled');
    }

  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess Heigher Number';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').style.color = 'red';
    } else {
      document.querySelector('.message').textContent = 'Game Over, Good luck for Next Time';
      document.querySelector('.message').style.color = 'red';
      document.querySelector('.score').textContent = 0;

      document.querySelector('.retry').removeAttribute('disabled', 'disabled');
      document.querySelector('.check').setAttribute('disabled', 'disabled');
    }
  }

})

//Reset Game Data
document.querySelector('.retry').addEventListener('click', function () {
  document.querySelector('.retry').classList.remove('btn-warning');
  document.querySelector('.retry').classList.add('btn-secondary');
  score = 5;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.secret-number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Start Gussing the Number';
  document.querySelector('.secret-number').style.backgroundColor = '#000000';
  document.querySelector('.message').style.color = '#000000';
  document.querySelector('.retry').setAttribute('disabled', 'disabled');
  document.querySelector('.check').removeAttribute('disabled', 'disabled');
  document.querySelector('body').style.backgroundColor = '#FBBB02';
  document.querySelector('.secret-number').textContent = '?';
});