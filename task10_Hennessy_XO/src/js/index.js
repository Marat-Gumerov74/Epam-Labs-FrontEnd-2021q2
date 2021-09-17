import { Info } from "./info.js";
import { renderField } from "./renderField.js";
import { checkGame } from "./checkGame.js";


const info = new Info();
window.onload = function () {
    renderField();
    info.startInfo();
    let step = 0;
    let resultGame = checkGame(step);
    console.log(resultGame)

    document.getElementById('game').onclick = function (event) {
        resultGame = checkGame(step);
        if (event.target.className === 'block' && !resultGame) {
            if(step % 2 === 0) {
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = 'O';
            }
            step++;
            let resultGame = checkGame(step);
            console.log(`result game`, resultGame);
            if (resultGame) {
                info.announcedWinner(resultGame);
            }
        }
    }
}








