function range(min, max) {

  function makeBigSum(a) {
    return function (b) {
      return (BigInt(a) + BigInt(b)) * ((BigInt(b) - BigInt(a) + 1) / 2);
    }
  }

  function makeNormalSum(a) {
    return function (b) {
      return (a + b) * ((b - a + 1) / 2);
    }
  }

  try {
    let result = null;

    if (typeof min != 'number' || typeof max != 'number') {
      throw new SyntaxError("Вы ввели не число!")
    }

    result = (makeNormalSum(min)(max) > Number.MAX_SAFE_INTEGER) ?
     makeBigSum(min)(max):
     makeNormalSum(min)(max);

    }

   catch(e) {
    alert('Извините в данных ошибка')
  }

  return result;
}

module.exports = range;