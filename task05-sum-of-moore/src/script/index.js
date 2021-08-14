import { Range} from "./range.js";
import { display } from "./display.js";

const range = new Range();
const btn = document.getElementById('btnSubmit');
btn. addEventListener('click', work);

function work() {
  display("clear");
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  clearInpits();

  display(range.compute(first, second));
}

function clearInpits() {
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
}