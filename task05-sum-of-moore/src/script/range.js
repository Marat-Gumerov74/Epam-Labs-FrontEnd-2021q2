import { display } from "./display.js";



export class Range {
  constructor() {
    this.pair = [];
    this.base = [];
  }

  setPair(min, max) {
    this.pair = [min, max];
  }

  addToBase () {
    this.base.push(this.pair);
  };

  isPairFind() {
    let result = false;
    for (let i = 0; i < this.base.length; i++) {
      if (this.base[i][0] == this.pair[0] && this.base[i][1] == this.pair[1]) {
        result = true;
      }
    }
    return result;
  };

  setResult(result) {
    for (let i = 0; i < this.base.length; i++) {
      if (this.base[i][0] == this.pair[0] && this.base[i][1] == this.pair[1]) {
        this.base[i].push(result);
      }
    }
  }

  compute(minStr, maxStr) {
    let result;
    this.setPair(minStr, maxStr);
    if ( this.isPairFind() == false) {
        this.addToBase();
        result =  this.ranging();
        this.setResult(result);
        return result;
    } else {
      for (let i = 0; i < this.base.length; i++) {
        if (this.base[i][0] == this.pair[0] && this.base[i][1] == this.pair[1]) {
          return this.base[i][2];
        }
      }
    }
  }

  ranging() {
    let result = null;
    let min = this.pair[0];
    let max = this.pair[1];

    function makeBigSum(a) {
      return function (b) {
        return BigInt((a + b) * ((b - a + 1) / 2));
      };
    }

    function makeNormalSum(a) {
      return function (b) {
        return (a + b) * ((b - a + 1) / 2);
      };
    }

    try {
      if (min >= max) {
        display('min больше или равно max');
      } else {
        result = (makeNormalSum(min)(max) > Number.MAX_SAFE_INTEGER) ?
          makeBigSum(min)(max) :
          makeNormalSum(min)(max);
      }
    } catch (e) {
      display('Извините в данных ошибка');
    }
    return result;
  }
}