'use strict';
//Элементы DOM выбронные по селектору и ID
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const plyer0Element = document.querySelector('.player--0');
const plyer1Element = document.querySelector('.player--1');
//Объявляем переменные
let currentScore, activePlayer, totalScore, isPlaying;
//Функция Инициализации элементов в игре
const initGame = function () {
    //Текущие очки
    currentScore = 0;
    //Активный игрок
    activePlayer = 0;
    //Итоговые очки
    totalScore = [0, 0];
    //состояние игры
    isPlaying = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    plyer0Element.classList.remove('player--winner');
    plyer1Element.classList.remove('player--winner');
    plyer0Element.classList.remove('player--active');
    plyer1Element.classList.remove('player--active');
    plyer0Element.classList.add('player--active');
    diceElement.classList.add('hidden');
};
//Инициализация игры
initGame();
//Переключение активного игрока
const switchActivePlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //Метод toggle() - Если класс у элемента отсутствует - добавляет, иначе - убирает.
    plyer0Element.classList.toggle('player--active');
    plyer1Element.classList.toggle('player--active');
};
//бросаем кубик (создаём слушателя для кнопки 'бросить кубик')
btnRoll.addEventListener('click', function () {
    if (isPlaying) {
        //1. Сгенерировать случайное чило
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        //2. Отобразить число на кубике
        diceElement.classList.remove('hidden');
        diceElement.src = `dice${diceNumber}.png`;

        //3. Добавляем очки (в текущие очки) если число не равно 1 иначе переключиться на другого игрока.
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchActivePlayer();
        }
    }
});
//Создаём слушатель для кнопки 'оставить'
btnHold.addEventListener('click', function () {
    if (isPlaying) {
        //1. Добавить очки к основным очкам текущего игрока.
        totalScore[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
        //2. Если общие очки игрока >= 100 игрок победил. Если не победил переключить активного игрока на другова
        if (totalScore[activePlayer] >= 100) {
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
        } else {
            if (currentScore != 0) {
                switchActivePlayer();
            }
        }
    }
});
//Создаём слушатель по кнопки 'новая игра'
btnNew.addEventListener('click', initGame);