 import {  base } from './base.js';

export class Calculator {
  constructor(){
    this.display = null;
    this.memory = null;
    this.operator = null;
    this.ready = false;
  }

  setOperator(str) {
    this.operator = str;
  }

  onDisplay(str) {
    const displayPanel = document.querySelector('.display');
    displayPanel.innerHTML = str;
  }

  hide (str) {
    document.querySelector(str)
      .className += " hide";
  }

  calculate() {
    const result = base[this.memory];
    this.onDisplay(`${this.memory}   --- is be  ${result}`);
  }

  addOperand() {
    let action = 2;
    const wrapper = document.querySelector('.operands__wrapper');
    wrapper.addEventListener('click', event => {
      // сепарация по оператору
      // '==' && '==='
        if  (action > 0 && (this.operator === "==" || this.operator === "===")) {
          if (event.target.className === 'operand__item') {
            if (this.memory && action) {
              this.memory += ` ${this.operator} ${event.target.innerText}`;
              this.onDisplay(this.memory);
              action--;
            } else if (action) {
              this.memory = `${event.target.innerText}`;
              this.onDisplay(this.memory);
              action--;
            }
          }
      // 'if'
        } else if (action > 0 && (this.operator === "if")) {
          if (event.target.className === 'operand__item') {
            if (!this.memory) {
              this.memory = `${this.operator} (${event.target.innerText})`;
              this.onDisplay(this.memory);
              action = 0;
            }
          }
        }
      if (!action) {
        this.hide('.first-operand');
        this.calculate();
      }
    });
  }
}
