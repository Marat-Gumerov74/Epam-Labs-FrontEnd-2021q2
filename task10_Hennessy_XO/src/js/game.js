import { Display } from "./display.js";

export class Game {
    constructor() {
        this.step = 0;
        this.resultGame = '';
        this.display = new Display();
        this.start();
    }

    start() {
        this.display.renderField();
        this.display.startInfo();
        this.onListen();
    }

    checkGame = (step) => {
        let winner = this.checkWinner();
        const isStepOver = (step) => step === Number(9)
        this.resultGame = (isStepOver(step) && winner === Number(-1))?
            "game ended in a draw":
            (winner === Number(1))?
                'won the first player':
                (winner === Number(2))?
                    'won the second player':
                    ''
    }

    checkWinner = () => {
        let allblock = document.querySelectorAll('.block');
        let winner;

        let isFind = ([el1,el2,el3], text) => (el1.innerHTML === text && el2.innerHTML === text && el3.innerHTML === text)

        if (
            isFind([allblock[0], allblock[1], allblock[2]], "X") ||
            isFind([allblock[3], allblock[4], allblock[5]], "X") ||
            isFind([allblock[6], allblock[7], allblock[8]], "X") ||
            isFind([allblock[0], allblock[3], allblock[6]], "X") ||
            isFind([allblock[1], allblock[4], allblock[7]], "X") ||
            isFind([allblock[2], allblock[5], allblock[8]], "X") ||
            isFind([allblock[0], allblock[4], allblock[8]], "X") ||
            isFind([allblock[6], allblock[4], allblock[2]], "X")
        )
        {
            winner = 1;
        } else if (
            isFind([allblock[0], allblock[1], allblock[2]], "O") ||
            isFind([allblock[3], allblock[4], allblock[5]], "O") ||
            isFind([allblock[6], allblock[7], allblock[8]], "O") ||
            isFind([allblock[0], allblock[3], allblock[6]], "O") ||
            isFind([allblock[1], allblock[4], allblock[7]], "O") ||
            isFind([allblock[2], allblock[5], allblock[8]], "O") ||
            isFind([allblock[0], allblock[4], allblock[8]], "O") ||
            isFind([allblock[6], allblock[4], allblock[2]], "O")
        ) {
            winner = 2;
        } else {
            winner = -1;
        }
        return winner;
    }

    onStep = (event) => {
        if (event.target.className === 'block' && event.target.innerHTML === "") {
            if(this.step % 2 === 0) {
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = 'O';
            }

            this.step++;
            this.checkGame(this.step);
            if (this.resultGame) {
                this.offListen()
                this.display.announcedWinner(this.resultGame);
            }
        }
    }

    onListen() {
        document.getElementById('game')
            .addEventListener('click', this.onStep );
    }

    offListen() {
        document.getElementById('game').removeEventListener('click', this.onStep)
    }
}