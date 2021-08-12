const a = 10;
const b = 900000000000;
const result2 = range(a, b);

console.log(`result function range: ${result2}`);


function range(min, max) {

  function makeBigSum(a) {
    return function (b) {
      return BigInt ((a + b) * ((b - a + 1) / 2));
    };
  }

  function makeNormalSum(a) {
    return function (b) {
      return (a + b) * ((b - a + 1) / 2);
    };
  }

  try {
    let result = null;

    if (typeof min != 'number' || typeof max != 'number') {
      throw new SyntaxError("Вы ввели не число!");
    }

    result = (makeNormalSum(min)(max) > Number.MAX_SAFE_INTEGER) ?
      makeBigSum(min)(max) :
      makeNormalSum(min)(max);
    
    return result;
  } catch (e) {
    alert('Извините в данных ошибка')
  }
}