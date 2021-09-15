export class Game {
    constructor() {
        this.step = 0;
        this.state = this.loadData()
    }

    loadData() {
        let first = window.sessionStorage.getItem('first');
        let second = window.sessionStorage.getItem('second');
        return [first, second];
    }

    start() {
        this.addFields()
        this.checkWinner()
    }

    addFields() {
        let step = this.step;

        document.getElementById('game').onclick = function (event) {

            if (event.target.className === 'block') {
                if(step % 2 === 0) {
                    event.target.innerHTML = 'X';
                } else {
                    event.target.innerHTML = 'O';
                }
                this.step = step + 1;
                console.log(this.step)
                step = this.step;
            }
        }
    }

    checkWinner() {
        if (this.step === 9) {
            console.log("finish")
        }
        /*

            1) проверки:проверка количества пустых шагов.
            2) проверка что на табло по шагам.
                проверка Х
                проверка 0
                если есть выигрышные ситуации - пишем о выигрыше. добавляем в память счет.
        */
        console.log(this.isFieldsOver())
    }

    isFieldsOver() {
        let allblock = document.querySelectorAll('.block');
        console.log(allblock)
        // let arr = allblock.filter(function (el) {
        //     return el.innerHTML === ""
        // });
        // return arr.length;
    }


}