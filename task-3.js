'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('enter password');

if (message === null) {
  alert(`Отменено пользователем!`);
} else if (message === ADMIN_PASSWORD) {
  alert(`Добро пожаловать!`);
} else {
  message = `Доступ запрещен, неверный пароль!`;
  alert(message);
}
