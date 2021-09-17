import { Info } from "./info.js";
import { renderField } from "./renderField.js";
import { checkGame } from "./checkGame.js";


const info = new Info();
window.onload = function () {
    renderField();
    info.startInfo();
    let step = 0;

    document.getElementById('game').onclick = function (event) {
        if (event.target.className === 'block') {
            if(step % 2 === 0) {
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = 'O';
            }
            step++;
            let resultGame = checkGame(step);
            console.log(`result game`, resultGame)
            if (resultGame) {
                info.announcedWinner(resultGame);
            }

        }
    }

}








