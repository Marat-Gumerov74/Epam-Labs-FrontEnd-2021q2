import { doRange } from "./range.js";
import { display } from "./display.js";

const btn = document.getElementById('btnSubmit');
console.log(btn);
btn. addEventListener('click', work);

function work() {
  display("clear");
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  clearInpits();
  display(doRange(first, second));
}

function clearInpits() {
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
}