export class Calculator {
  constructor(){
    this.valueBase = [ true, false, 1,0,-1, "true","false","1","0","-1","",null,
                       undefined,Infinity,-Infinity,[],{},[[]],[0],[1],NaN ]
    this.display = null;
    this.memory = null;
    this.operator = null;
    this.ready = false;
    this.result = null;
    this._SimpleComparison = '==';
    this._StrictComparison = '===';
    this._ifOperator = 'if';
    this.action = 2;

    this._panelBlock = document.querySelector('.operands__wrapper');
    this._panel = document.querySelector('.first-operand');
    this._btnReloadWrapper = document.querySelector('.btnReload-wrapper');
  }

  restoringPage () {
    document.location.reload();
  }

  setOperator(str) {
    this.operator = str;
  }

  onDisplay(str) {
    const displayPanel = document.querySelector('.display');
    displayPanel.innerHTML = str;
  }

  hide (str) {
     document.querySelector(str).className += ` hide`;
  }

  calculate() {
    let conversion;

    if (this.operator === this._ifOperator) {
      this.onDisplay(`${this.memory}   --- is be  ${this.result}`)
      this.addreoladBtn();
    } else {
      const first = this.result[0][1];
      const second = this.result[1][1];

      (this.operator === this._SimpleComparison)?
        conversion = first == second:
        conversion = first === second;

      this.onDisplay(`${this.memory}   --- is be  ${conversion}`);
      this.addreoladBtn();
      };
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

  addOperand() {
    let action = 2;
    const wrapper = document.querySelector('.operands__wrapper');
    wrapper.addEventListener('click', event => {
      // сепарация по оператору
      // '==' && '==='
      if (action > 0 && (this.operator === this._SimpleComparison || this.operator === this._StrictComparison)) {
        if (event.target.className === 'operand__item') {
          if (this.memory && action) {
            this.result.push([`${event.target.innerHTML}`, this.valueBase[event.target.dataset.item]]);
            this.memory += `${this.operator} ${event.target.innerHTML}`;
            this.onDisplay(`${this.memory}`);
            action--;
          } else if (!this.memory && action) {
            this.result = [
              [`${event.target.innerHTML}`, this.valueBase[event.target.dataset.item]]
            ];
            this.memory = event.target.innerHTML;
            this.onDisplay(this.memory);
            action--;
          }
        }
        // 'if'
      } else if (action > 0 && (this.operator === this._ifOperator)) {
        if (event.target.className === 'operand__item') {
          if (!this.memory) {
            this.memory = `${this.operator} (${event.target.innerText})`;
            this.result = Boolean(this.valueBase[event.target.dataset.item]);
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
