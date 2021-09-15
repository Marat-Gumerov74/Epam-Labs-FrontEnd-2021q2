
import { renderField } from "./renderField.js";
window.onload = function () {
    renderField();

    let step = 0;

    document.getElementById('game').onclick = function (event) {
        if (event.target.className === 'block') {
            if(step % 2 === 0) {
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = 'O';
            }
            step++;
            checkWinner();
        }
    }

    function checkWinner () {
        let allblock = document.querySelectorAll('.block');
        if (allblock[0].innerHTML==="X" && allblock[1].innerHTML==="X" && allblock[2].innerHTML === 'X') display('Игрок 1')
        if (allblock[3].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[5].innerHTML === 'X') display('Игрок 1')
        if (allblock[6].innerHTML==="X" && allblock[7].innerHTML==="X" && allblock[8].innerHTML === 'X') display('Игрок 1')
        if (allblock[0].innerHTML==="X" && allblock[3].innerHTML==="X" && allblock[6].innerHTML === 'X') display('Игрок 1')
        if (allblock[1].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[7].innerHTML === 'X') display('Игрок 1')
        if (allblock[2].innerHTML==="X" && allblock[5].innerHTML==="X" && allblock[8].innerHTML === 'X') display('Игрок 1')
        if (allblock[0].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[8].innerHTML === 'X') display('Игрок 1')
        if (allblock[6].innerHTML==="X" && allblock[4].innerHTML==="X" && allblock[2].innerHTML === 'X') display('Игрок 1')

        if (allblock[0].innerHTML==="O" && allblock[1].innerHTML==="O" && allblock[2].innerHTML==="O" ) display('Игрок 2')
        if (allblock[3].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[5].innerHTML==="O" ) display('Игрок 2')
        if (allblock[6].innerHTML==="O" && allblock[7].innerHTML==="O" && allblock[8].innerHTML==="O" ) display('Игрок 2')
        if (allblock[0].innerHTML==="O" && allblock[3].innerHTML==="O" && allblock[6].innerHTML==="O" ) display('Игрок 2')
        if (allblock[1].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[7].innerHTML==="O" ) display('Игрок 2')
        if (allblock[2].innerHTML==="O" && allblock[5].innerHTML==="O" && allblock[8].innerHTML==="O" ) display('Игрок 2')
        if (allblock[0].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[8].innerHTML==="O" ) display('Игрок 2')
        if (allblock[6].innerHTML==="O" && allblock[4].innerHTML==="O" && allblock[2].innerHTML==="O" ) display('Игрок 2')
    }
    function display (src) {
        alert(src)
    }
}








