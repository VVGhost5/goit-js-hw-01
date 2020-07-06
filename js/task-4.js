"use strict";

const pricePerDroid = 3000;
let userCredits = 23580;
let isUserEnteredTheNumber = false;
let inputCount;
let count;
let totalPrice;

do {
  inputCount = prompt(
    `Введите количество дроидов, которое вы хотите купить. На вашем счету сейчас - ${userCredits}`
  );
  count = inputCount.trim();
  totalPrice = pricePerDroid * count;

  if (count === null) {
    alert("Отменено пользователем!");
    continue;
  } else if (isNaN(count)) {
    alert("Неверное значение. Введите пожалуйста число");
    continue;
  } else {
    isUserEnteredTheNumber = true;
  }

  if (count !== null && !count) {
    isUserEnteredTheNumber = false;
    alert("Вы нечего не ввели. Введите пожалуйста значение");
  }

  if (isUserEnteredTheNumber) {
    if (userCredits - totalPrice >= 0) {
      userCredits -= totalPrice;
      alert(
        `Вы приобрели ${count} дронов, на счету осталось ${userCredits} кредитов`
      );
      break;
    } else {
      alert("Недостаточно средств на счету!");
    }
  }
} while (true);
