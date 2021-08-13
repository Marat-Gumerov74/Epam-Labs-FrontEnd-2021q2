import { display } from "./display.js";


export function doRange(minStr, maxStr) {
  let result = null;
  let min = Number(minStr);
  let max = Number(maxStr);

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

