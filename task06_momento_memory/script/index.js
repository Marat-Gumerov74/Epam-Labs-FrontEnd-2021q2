import { display } from "./display.js";

const btn = document.getElementById('btnSubmit');
btn. addEventListener('click', work);

function work() {
  display("clear");
  let word = document.getElementById("word").value;
  clearInpits();
  display(permutation(word));
}

function clearInpits() {
  document.getElementById('word').value = '';
}


function permutation(word) {
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
  display(Object.keys(anagrams));
}