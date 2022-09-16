'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // +1 означает что случайное число будет не с 0 а с 1 до 20
let score = 20;
let result = 0;
console.log(secretNumber);
//addEventListener отслеживать события у силектора check по click (клику мышкой на него) function - это то что будет происходить при нажатии на .check
document.querySelector('.check').addEventListener('click', function () {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';
    } else if (secretNumber === guessingNumber) {
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('.guess-message').textContent = 'Вы угадали число!';

        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').style.width = '50rem';
        document.querySelector('.question').style.fontSize = '8rem';

        if (score > result) {
            result = score;
            document.querySelector('.highscore').textContent = result;
        }
    } else if (guessingNumber > secretNumber && guessingNumber > 0 && guessingNumber <= 20) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess-message').textContent = 'Загаданное число меньше';
        } else {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess-message').textContent = 'Вы проиграли!';
        }
    } else if (guessingNumber < secretNumber && guessingNumber > 0 && guessingNumber <= 20) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Загаданное число больше';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess-message').textContent = 'Вы проиграли!';
        }
    } else {
        document.querySelector('.guess-message').textContent = 'Число от 1 до 20!';
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.question').textContent = '???';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.question').style.fontSize = '4rem';
    document.querySelector('.number-input').value = '';
    document.querySelector('.guess-message').textContent = 'Начни угадывать!';
    document.querySelector('.score').textContent = score;
});