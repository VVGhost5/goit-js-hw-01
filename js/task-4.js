"use strict";

const pricePerDroid = 3000;
let userCredits = 23580;
let isUserEnteredTheNumber = false;
let isAccepted = false;
let inputCount;
let count;
let totalPrice;

do {
    inputCount = prompt(
        `Введите количество дроидов, которое вы хотите купить. На вашем счету сейчас - ${userCredits}`
    );
    count = inputCount.trim();
    totalPrice = (pricePerDroid * count);

    if (count === null) {
        alert("Отменено пользователем!");
    } else if (isNaN(count)) {
        alert("Неверное значение. Введите пожалуйста число");
    } else {
        isUserEnteredTheNumber = true;
    }

    if (count !== null && !count) {
        isUserEnteredTheNumber = false;
        alert("Вы нечего не ввели. Введите пожалуйста значение");
    }

    if (isUserEnteredTheNumber) {
        if (userCredits - totalPrice >= 0) {
            userCredits -= totalPrice; {
                if (count === "1") {
                    alert(
                        `Вы приобрели ${count} дрон, на счету осталось ${userCredits} кредитов`
                    );
                    break;
                } else if (count === "2") {
                    alert(
                        `Вы приобрели ${count} дрона, на счету осталось ${userCredits} кредитов`
                    );
                    break;
                } else if (count === "3") {
                    alert(
                        `Вы приобрели ${count} дрона, на счету осталось ${userCredits} кредитов`
                    );
                    break;
                } else if (count === "4") {
                    alert(
                        `Вы приобрели ${count} дрона, на счету осталось ${userCredits} кредитов`
                    );
                    break;
                } else {
                    alert(
                        `Вы приобрели ${count} дронов, на счету осталось ${userCredits} кредитов`
                    );
                    break;
                }
            }
        } else {
            alert("Недостаточно средств на счету!");
        }
    }
}
while (isAccepted === false);