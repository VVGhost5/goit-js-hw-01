'use strict'

const ADMIN_KEYCODE = '1111'
let message;
let IsAccepted = false;
let value;

do {
    value = prompt('Введите пароль :');
    if (value === null) {
        alert('Отменено пользователем!');

    } else if (value === ADMIN_KEYCODE) {
        alert('Добро пожаловать !');
        break;

    } else {
        alert('Доступ запрещен, неверный пароль!');
    }
}
while (IsAccepted === false);