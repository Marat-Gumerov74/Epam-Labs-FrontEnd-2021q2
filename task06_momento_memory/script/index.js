import { display } from "./display.js";
import { Permutation } from "./permutation.js";

const btn = document.getElementById('btnSubmit');
btn. addEventListener('click', work);

function work() {
  display("clear");
  let word = document.getElementById("word").value;
  clearInpits();
  const permutation = new Permutation(word);
  display(permutation.getResult());
  setTimeout(display,5000,"clear");
}

function clearInpits() {
  document.getElementById('word').value = '';
}