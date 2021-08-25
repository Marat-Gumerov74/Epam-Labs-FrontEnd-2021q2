import { Range } from "./range.js";
import { display } from "./display.js";

const range = new Range();
const btn = document.getElementById('btn-submit');
btn. addEventListener('click', work);

function work() {
  display("clear");
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  clearInputs();
  display(range.compute(first, second));
}

function clearInputs() {
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
}