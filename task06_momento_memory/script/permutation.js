export function permutation (word) {
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
    
    let result = Object.keys(anagrams);
    return result;
}