"use strict";


let showMessage = () => {let userName = prompt("Как тебя зовут?", "друг");
alert(`Привет, ${userName}!`);}


function sum () {
    let a = prompt('Введите первое слагаемое');
    let b = prompt('Введите второе слагаемое');
    alert(`Сумма равна ${+a + +b}`);
}

function sub () {
    let a = prompt('Введите уменьшаемое');
    let b = prompt('Введите вычитаемое');
    alert(`Разность равна ${a - b}`);
}

function mult () {
    let a = prompt('Введите первый множитель');
    let b = prompt('Введите второй множитель');
    alert(`Произведение равно ${a * b}`);
}

function div () {
    let a = prompt('Введите делимое');
    let b = prompt('Введите делитель');
    alert(`Частное равно ${a / b}`);
}
