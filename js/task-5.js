"use strict";

const chinaName = "Китай";
const chinaPrice = 100;
const chiliName = "Чили";
const chiliPrice = 250;
const australiaName = "Австралия";
const australiaPrice = 170;
const indiaName = "Индия";
const indiaPrice = 80;
const jamaicaName = "Ямайка";
const jamaikaPrice = 120;
let isUserEnteredValue = false;
let countryValueNew;
let isAccepted = false;
let countryValue;
let message;

do {
    countryValue = prompt("Введите страну, куда нужно доставить товар");

    if (countryValue === null) {
        alert("Отменено пользователем!");
    } else {
        isUserEnteredValue = true;
        countryValueNew = countryValue.toLowerCase();
    }

    if (countryValue !== null && !countryValue) {
        isUserEnteredValue = false;
        alert("Вы нечего не ввели. Введите пожалуйста значение");
    }

    if (isUserEnteredValue) {
        switch (countryValueNew) {
            case chinaName.toLowerCase():
                message = `Доставка в ${chinaName} будет стоить ${chinaPrice} кредитов`;
                isAccepted = true;
                break;

            case chiliName.toLowerCase():
                message = `Доставка в ${chiliName} будет стоить ${chiliPrice} кредитов`;
                isAccepted = true;
                break;

            case australiaName.toLowerCase:
                message = `Доставка в ${australiaName} будет стоить ${australiaPrice} кредитов`;
                isAccepted = true;
                break;

            case indiaName.toLowerCase:
                message = `Доставка в ${indiaName} будет стоить ${indiaPrice} кредитов`;
                isAccepted = true;
                break;

            case jamaicaName.toLowerCase:
                message = `Доставка в ${jamaicaName} будет стоить ${jamaicaPrice} кредитов`;
                isAccepted = true;
                break;

            default:
                message = "В вашей стране доставка не доступна";
        }
        alert(message);

        if (isAccepted) {
            break;
        }
    }
}
while (true);