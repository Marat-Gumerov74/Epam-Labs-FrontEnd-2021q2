 import {  Calculator } from './calculator.js';

document.addEventListener("DOMContentLoaded ", start());

function start() {
  const calc = new Calculator();

  const menuWrapper = document.querySelector('.menu');
  menuWrapper.addEventListener('click', (e) => {
    if (e.target.className === 'menu__button') {
      calc.chooseType(e.target.dataset.menu);
    }
  });
};
