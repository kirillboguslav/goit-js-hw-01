'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let totalPrice = prompt('какое количество дроидов хотите купить?');

if (totalPrice === null) {
  alert(`Отменено пользователем!`);
} else if (credits < totalPrice * pricePerDroid) {
  alert(`Недостаточно средств на счету!`);
} else {
  alert(`Вы купили ${totalPrice} дроидов, на счету осталось 
  ${credits - totalPrice * pricePerDroid} кредитов.`);
}
