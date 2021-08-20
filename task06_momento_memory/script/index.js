import { display } from "./display.js";
import { permutation } from "./permutation.js";

const btn = document.getElementById('btnSubmit');
btn. addEventListener('click', work);

function work() {
  display("clear");
  let word = document.getElementById("word").value;
  clearInpits();
   display(permutation(word));
  setTimeout(display,5000,"clear");
}

function clearInpits() {
  document.getElementById('word').value = '';
}