import { display } from "./display.js";
import { permutation } from "./permutation.js";


const btn = document.getElementById('btnSubmit');
btn. addEventListener('click', work);

function work() {
  display("clear");
  let word = document.getElementById("word").value;
  clearInputs();
  calculate(word);

  setTimeout(display,10000,"clear");
}

function calculate(word) {
  let isWord = (str) => (/^[A-Za-zА-Яа-яЁё]+$/.test(str));

  (isWord(word))?
      display(permutation(word)):
      display(`Not a word was introduced`);
}

function clearInputs() {
  document.getElementById('word').value = '';
}