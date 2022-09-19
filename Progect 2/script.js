'use strict';
//Находим элементы в документе html и присваеваем их переменным
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const closeModalWindow = document.querySelector('.close-modal-window')
const showModalWindow = document.querySelectorAll('.show-modal-window');
//Создаём функцию showWindow() которая удаляет класс hidden в переменных modalWindow и overlay
function showWindow() {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
//Создаем функцию closeWindow() которая добавляет к переменным modalWindow и overlay класс hidden
function closeWindow() {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
};
//Создаём цикл который пробигает по переменной showModalWindow и слушает нажатие на button и при нажатии запускает метод showWindow
for (let x = 0; x < showModalWindow.length; x++) {
    showModalWindow[x].addEventListener('click', showWindow);
};
//Слушатели событий при нажатии на которые (closeModalWindow, overlay) запускается функция closeWindow
closeModalWindow.addEventListener('click', closeWindow);
overlay.addEventListener('click', closeWindow);
//Создаем слушатель по всему документу html (document) при нажатии кнопки (keydown) в функцию передаётся это нажатие (event)
document.addEventListener('keydown', function (event) {
    //Если нажатый символ (event.key) равен кнопки Escape И если у переменной modalWindow нет класса hidden запускается функция closeWindow()
    if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        closeWindow();
    }
});