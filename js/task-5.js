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
            case "китай":
                alert(`Доставка в ${chinaName} будет стоить ${chinaPrice} кредитов`);
                isAccepted = true;
                break;

            case "чили":
                alert(`Доставка в ${chiliName} будет стоить ${chiliPrice} кредитов`);
                isAccepted = true;
                break;

            case "австралия":
                alert(
                    `Доставка в ${australiaName} будет стоить ${australiaPrice} кредитов`
                );
                isAccepted = true;
                break;

            case "индия":
                alert(`Доставка в ${indiaName} будет стоить ${indiaPrice} кредитов`);
                isAccepted = true;
                break;

            case "ямайка":
                alert(`Доставка в ${jamaicaName} будет стоить ${jamaicaPrice} кредитов`);
                isAccepted = true;
                break;

            default:
                alert("В вашей стране доставка не доступна");
        }
        if (isAccepted === true) {
            break;
        }
    }
}
while (isAccepted === false);