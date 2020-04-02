'use strict';

let name = 'Генератор защитного поля';
let price = 1000;
const message = `Выбран «${name}», цена за штуку ${price} кредитов.`;
console.log(message);
let newPrice = 2000;
price = newPrice;
// Хотя можно было сделать и так -> price = 2000;
const message1 = `Выбран «${name}», цена за штуку ${price} кредитов.`;
console.log(message1);
