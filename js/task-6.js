"use strict";

let input;
let total = 0;
let inputNew;
let isUserEnteredTheNumber = false;

do {
  input = prompt("Введите ваше число :");
  if (input !== null) {
    input = input.trim();
    inputNew = parseInt(input);
    if (isNaN(input)) {
      alert("Ошибка ! Введите число");
    } else {
      isUserEnteredTheNumber = true;
    }

    if (input !== null && !input) {
      isUserEnteredTheNumber = false;
      alert("Вы нечего не ввели. Введите пожалуйста значение");
    }

    if (isUserEnteredTheNumber) {
      total = inputNew + total;
    }

  }
} while (input !== null);

if (input == null) {
  alert(`Общая сумма чисел равна ${total} `);
}