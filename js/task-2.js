'use strict'

let total = 100;
let ordered = 50;

if (ordered > total) {
    console.log('На складе недостаточно товаров!');
} else {
    console.log('Заказ оформлен, с вами свяжется менеджер')
}

total = 100;
ordered = 120;

if (ordered > total) {
    console.log('На складе недостаточно товаров!');
} else {
    console.log('Заказ оформлен, с вами свяжется менеджер')
}

total = 100;
ordered = 100;

if (ordered > total) {
    console.log('На складе недостаточно товаров!');
} else {
    console.log('Заказ оформлен, с вами свяжется менеджер')
}