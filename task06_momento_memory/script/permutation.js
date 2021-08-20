export function permutation(masterword) {
  var result = {}
  var a, i, l;

  function nextLetter(a, l, key, used) {
    var i;
    var j;
    if (key.length == l) {
      return;
    }
    for (i = 0; i < l; i++) {
      if (used.indexOf("" + i) < 0) {
        result[key + a[i]] = "";
        nextLetter(a, l, key + a[i], used + i);
      }
    }
  }

  a = masterword.split("");
  l = a.length;
  for (i = 0; i < a.length; i++) {
    result[a[i]] = "";
    nextLetter(a, l, a[i], "" + i)
  }
return result;
console.log(result);
}

