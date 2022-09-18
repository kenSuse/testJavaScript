'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // +1 означает что случайное число будет не с 0 а с 1 до 20
let score = 20;
let result = 0;
//Функция случайно загадывает число
function randomSecretNumber() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
};
//Функция устанавливает значение в селектор guess-message
function displayGuessMessage(messege) {
    document.querySelector('.guess-message').textContent = messege;
};
//Функция устанавливает значение в селектор score
function displayScore(messege) {
    document.querySelector('.score').textContent = messege;
};
//Функция устанавливает значение в селекторы если пользователь угадал случайное число. Меняет стили страницы
function gameWon(messegeNumber, messege1, messege2, messege3) {
    document.querySelector('.question').textContent = messegeNumber;
    document.querySelector('body').style.backgroundColor = messege1;
    document.querySelector('.question').style.width = messege2;
    document.querySelector('.question').style.fontSize = messege3;
};
//Функция устанавливает значение в селектор highscore
function resultPlus(messegeNumber) {
    document.querySelector('.highscore').textContent = messegeNumber;
}
// Функция сбрасывает всё при нажатии на кнопку сначала.
function resetGame(numberScore, messege1, messege2, messege3, messege4, messegeValue) {
    score = numberScore;
    document.querySelector('.question').textContent = messege1;
    document.querySelector('body').style.backgroundColor = messege2;
    document.querySelector('.question').style.width = messege3;
    document.querySelector('.question').style.fontSize = messege4;
    document.querySelector('.number-input').value = messegeValue;
};
//addEventListener отслеживать события у селектора check по click (клику мышкой на него) function - это то что будет происходить при нажатии на .check
document.querySelector('.check').addEventListener('click', function () {
    //Введенное значение пользователем преобразуем с число и ниже начинаем сверять
    const guessingNumber = Number(document.querySelector('.number-input').value);
    //Если пользователь ничего не ввел
    if (!guessingNumber) {
        displayGuessMessage('Введите число!');
        //Если пользователь ввел загаданное число
    } else if (secretNumber === guessingNumber) {
        displayGuessMessage('Вы угадали число!');
        gameWon(secretNumber, 'green', '50rem', '8rem');
        if (score > result) {
            result = score;
            resultPlus(result);
        }
        //Если пользователь ввел число больше или меньше загаданного
    } else if (guessingNumber !== secretNumber && guessingNumber > 0 && guessingNumber <= 20) {
        if (score > 1) {
            score--;
            displayScore(score);
            displayGuessMessage((guessingNumber > secretNumber) ? 'Загаданное число меньше' : 'Загаданное число больше');
            //Если у пользователя закончились попытки
        } else {
            displayScore(0);
            displayGuessMessage('Вы проиграли!');
        }
        //Если пользователь ввел число больше 20 или меньше 0
    } else {
        displayGuessMessage('Число от 1 до 20!');
    }
});
//addEventListener отслеживать события у селектора again по click (клику мышкой на него) function - это то что будет происходить при нажатии на .check
document.querySelector('.again').addEventListener('click', function () {
    randomSecretNumber();
    resetGame(20, '???', 'rgb(0, 0, 0)', '25rem', '4rem', '');
    displayScore(score);
    displayGuessMessage('Начни угадывать!');
});