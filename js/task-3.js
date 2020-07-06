'use strict'

const ADMIN_KEYCODE = '1111'
let message;
let value;
let isAccepted = false;

do {
    value = prompt('Введите пароль :');
    if (value === null) {
        message = 'Отменено пользователем!';

    } else if (value === ADMIN_KEYCODE) {
        message = 'Добро пожаловать !'
        isAccepted = true;

    } else {
        message = 'Доступ запрещен, неверный пароль!';
    }
    alert(message);

    if (isAccepted) {
        break;
    }
}
while (true);