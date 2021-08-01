 import {  Calculator } from './calculator.js';

document.addEventListener("DOMContentLoaded ", start());

function start() {
  const calc = new Calculator();

  const menuButtonFirst = document.querySelector('.menu__button-1');
  const menuButtonSecond = document.querySelector('.menu__button-2');
  const menuButtonThird = document.querySelector('.menu__button-3');

  menuButtonFirst.addEventListener('click', () =>{
    calc.setOperator('==');
    calc.hide('.menu__button-2');
    calc.hide('.menu__button-3');
    calc.onDisplay('choose the first and second operand for comparison');
    calc.addOperand();
  });

  menuButtonSecond.addEventListener('click', () => {
    calc.setOperator('===');
    calc.hide('.menu__button-1');
    calc.hide('.menu__button-3');
    calc.onDisplay('choose the first and second operand for comparison');
    calc.addOperand();
  });

  menuButtonThird.addEventListener('click', () => {
    calc.setOperator('if');
    calc.hide('.menu__button-1');
    calc.hide('.menu__button-2');
    calc.onDisplay('choose expression');
    calc.addOperand();
  });
};
