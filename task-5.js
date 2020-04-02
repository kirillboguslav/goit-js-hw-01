'use strict';

let country = prompt('Укажите Вашу страну для расчета доставки');
country = country.toLowerCase();
let credits;

switch (country) {
  case 'китай':
    credits = 100;
    break;

  case 'чили':
    credits = 250;
    break;

  case 'австралия':
    credits = 170;
    break;

  case 'индия':
    credits = 80;
    break;

  case 'ямайка':
    credits = 120;
    break;

  case 'украина':
    credits = `free!`;
    break;

  default:
    const def = alert(`В вашей стране доставка не доступна!`);
}
if (credits !== undefined) {
  alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
}
