import { display } from "./display.js";

export class Range {
  constructor() {
    this.myStorage = window.localStorage;
  }

  compute(minStr, maxStr) {
    let result;
    let key = JSON.stringify([minStr, maxStr]);

    if (this.myStorage.getItem(key)) {
      return Number(this.myStorage.getItem(key));
    } else {
      result = this.ranging(minStr, maxStr);
      this.myStorage.setItem(key, String(result));
      return result;
    }
  }

  ranging(min, max) {
    let result = null;

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
        display('Error: min is greater than or equal to max');
      } else {
        result = (makeNormalSum(min)(max) > Number.MAX_SAFE_INTEGER) ?
          makeBigSum(min)(max) :
          makeNormalSum(min)(max);
      }
    } catch (e) {
      display('Sorry data error');
    }
    return result;
  }
}