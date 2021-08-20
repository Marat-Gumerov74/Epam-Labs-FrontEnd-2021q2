import { permutation} from "./permutation";
import { display } from "./display.js";

const btn = document.getElementById('btnSubmit');
btn. addEventListener('click', work);

function work() {
  display("clear");
  let word = document.getElementById("word").value;
  console.log(word);
  (function () {
    document.getElementById('word').value = ''
  }());
  display(permutation(word));
}