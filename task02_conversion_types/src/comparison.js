export class Comparison {
  constructor(amauntOperators) {
    this.amauntOperators = amauntOperators;
    this.first = null;
    this.second = null;
    this.single = null;
    this.isDataFill = false;
    this.result = null;
    this.resultMessage = '';
  }

  getResilt() {
    return this.result;
  }

  getResultMessage() {
    return this.resultMessage;
  }

  addDataButton(arrPair) {
    if (this.amauntOperators % 2 == 0) {
      if (this.first) {
        this.isDataFill = true;
        this.setSecond(arrPair);
      } else {
        this.setFirst(arrPair);
      }
    } else {
      this.isDataFill = true;
      this.setSingle(arrPair);
    }
  }

  setFirst(arrPair) {
    this.first = arrPair;
  };

  setSecond(arrPair) {
    this.second = arrPair;
  }

  setSingle(arrPair) {
    this.single = arrPair;
  }

  compareData(operator) {
    switch (operator) {
      case '==':
        this.result = this.first[1] == this.second[1];
        this.resultMessage = `${this.first[0]} == ${this.second[0]} --- is be `;
        break;
      case '===':
        this.result = this.first[1] == this.second[1];
        this.resultMessage = `${this.first[0]} === ${this.second[0]} --- is be `;
        break;
      default:
        this.result = Boolean(this.single[1]);
        this.resultMessage = `if (${this.single[0]}) --- is be `;
        break;
    }

  }
}
