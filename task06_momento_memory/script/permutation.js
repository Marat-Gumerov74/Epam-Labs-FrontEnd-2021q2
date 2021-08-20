export class permutation {
  constructor(word) {
    this.word = word;
    this.result = null;
    this.calculate();
  }

  getResult() {
    return this.result;
  }

  calculate() {
    console.log(1);
    let arr = [word];
    let anagrams = {};

    arr.forEach(function (str) {
      let recurse = function (ana, str) {
        if (str === '')
          anagrams[ana] = 1;
        for (let i = 0; i < str.length; i++)
          recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
      };
      recurse('', str);
    });
    this.result = (Object.keys(anagrams));
  }
}