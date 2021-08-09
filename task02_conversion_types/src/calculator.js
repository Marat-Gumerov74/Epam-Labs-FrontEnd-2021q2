 import { Comparison } from './comparison.js';

export class Calculator {
  constructor(){
    this.valueBase = [ true, false, 1,0,-1, "true","false","1","0","-1","",null,
                       undefined,Infinity,-Infinity,[],{},[[]],[0],[1],NaN ];
    this.operator = null;
    this._SimpleComparison = '==';
    this._StrictComparison = '===';
    this._ifOperator = 'if';
    this._btnReloadWrapper = document.querySelector('.btnReload-wrapper');
  }

  restoringPage () {
    document.location.reload();
  }

  chooseType (dataBtn) {
    const arrBtn = document.querySelectorAll('.menu__button');
    for (let i = 0; i < arrBtn.length; i++) {
      if (arrBtn[i].dataset.menu !== dataBtn) {
        this.hide(arrBtn[i]);
      } else {
        this.operator = dataBtn;
        this.onDisplay(arrBtn[i].dataset.message);
        this.fillData();
      }
    }
  }

  onDisplay(str) {
    const displayPanel = document.querySelector('.display');
    displayPanel.innerHTML = str;
  }

  hide (str) {
    (typeof str !== "string")?
      str.className+= ` hide`:
      document.querySelector(str).className += ` hide`;
    
  }

  displayResult(arr) {
    this.onDisplay(`${arr[0]} ${arr[1]}`)
    this.addreoladBtn();
  }

  addreoladBtn() {
    let btnReload = document.createElement('button');
    btnReload.className = "btnReload";
    btnReload.innerHTML = "<strong>reload</strong>";
    this._btnReloadWrapper.appendChild(btnReload);
    btnReload.addEventListener('click', () => {
      this.restoringPage()});
  }

  deleteBtnReload() {
    const btn = document.querySelector('.btnReload');
    btn.parentNode.removeChild(btn);
  }

  isAmountOperators(operator) {
    return (operator === this._SimpleComparison || operator === this._StrictComparison)? 2 : 1;
  }
 
  fillData() {
    const comparison = new Comparison(this.isAmountOperators(this.operator));
    const wrapper = document.querySelector('.operands__wrapper');

    wrapper.addEventListener('click', event => {
      if (!comparison.isDataFill && event.target.className === 'operand__item') {
          this.onDisplay(event.target.innerHTML);
          const arr = [event.target.innerHTML, this.valueBase[event.target.dataset.item]];
          console.log(`arr = ${arr}`);
          comparison.addDataButton(arr);
        }

      if (comparison.isDataFill) {
        comparison.compareData(this.operator);
        this.displayResult([comparison.getResultMessage(), comparison.getResilt()]);
        }
      });
  }
}