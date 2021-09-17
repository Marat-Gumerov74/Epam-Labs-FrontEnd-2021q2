import { checkWinner } from "./checkWinner.js";

export function checkGame(step) {
    let winner = checkWinner();

    if (isStepOver(step) && winner === -1) {
        console.log("возвращаем что никто не выиграл")
        return "game ended in a draw"
    }

    if (winner === 1){
        console.log(`возвращаем текст  1 игрок`)
        return 'won the first player'
    }

    if (winner === 2){
        console.log(`возвращаем текст второй игрок`)
        return  'won the second player'
    }
}


function isStepOver (step) {
    return (step === Number(9))
}