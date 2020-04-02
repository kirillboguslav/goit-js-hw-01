'use strict';
const total = 100; // количество товаров на складе
const ordered = 130; // единиц товара в заказе

if (total < ordered) {
  console.log(`На складе недостаточно твоаров!`);
} else {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
}
