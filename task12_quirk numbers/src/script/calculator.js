
export class Calculator {
    constructor( currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
        this.memory = [];
        this.stack = [];
        this.readyResult = false;
        this.isNeedClear = false;
    }

    clear() {
        this.clearRam();
        this.currentOperand = '';
        this.readyResult = false;
        this.stack = [];
        this.isNeedClear = false;
    }

    appendNumber(number) {
        if (!this.isNeedClear){
            this.currentOperand = this.currentOperand.toString() + number.toString();
            this.addToRam(number.toString());
        } else {
            this.currentOperand = `please push AC`
        }
    }

    appendOperator(sign, meaning) {
        if (!this.isNeedClear){
            this.currentOperand = this.currentOperand.toString() + sign.toString();
            this.addToRam(meaning.toString());
        } else {
            this.currentOperand = `please push AC`
        }
    }

    async computeAll() {
        this.stack = this.memory;
        while (!this.readyResult) {
            if (this.stack[0] && this.stack[1] && this.stack[2] && !this.readyResult) {
                let swap =  await this.compute(this.stack[0], this.stack[1], this.stack[2])
                this.stack.splice(0, 3, swap);
            } else {
                this.readyResult = !this.readyResult;
                let res = this.stack[0];
                this.stack = [];
                return res;
            }
        }
    }

    async buildResult () {
        this.currentOperand = await this.computeAll();
        this.updateDisplay(true);
    }

    addToRam = (el) => this.memory.push(el);

    clearRam = () => this.memory = [];

    updateDisplay = (isNeedClear = false) => {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.isNeedClear = isNeedClear;
    }

    getPause = () => Math.floor(Math.random() * (4000 - 1000) + 1000)

    async compute (first, second, operator) {
        const myPromise = new Promise((res) => {
            setTimeout(() => {
                res(this.getResult(first, second, operator))
            }, this.getPause())
        })

        return await myPromise.then((body) => {
            return body;
        });
    }

    getResult = (first, second, operator) => {
        let computation = null;
        if ((first === "0" || second === "0") && operator === 'division') {
            return 0
        } else {
            switch (operator) {
                case 'addition':
                    computation = (Number(first) + Number(second));
                    break
                case 'subtraction':
                    computation = (Number(first) - Number(second));
                    break
                case 'multiplication':
                    computation = (Number(first) * Number(second));
                    break
                case 'division':
                    computation = (Number(first) / Number(second));
                    break
                default:
                    return;
            }
        }
        return computation;
    }
}