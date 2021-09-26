export class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.readyToReset = false;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    findLonger(first, second) {
        const f = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0));
        let a = f(Math.abs(first));
        let b = f(Math.abs(second));
        console.log( a, b);
        return a > b ? a + 1 : b + 1;
    }

    errorMessage() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation =  `error`;
        this.updateDisplay();
    }

    chooseSpecial(specOperation) {
        if (this.currentOperand === '') return
        switch (specOperation) {
            case '±':
                this.currentOperand = this.currentOperand * (-1);
                break
            case '√':
                this.currentOperand = this.currentOperand > 0 ? Math.sqrt(this.currentOperand) : this.errorMessage();
                break
            case '1/𝒙':
                this.currentOperand = 1 / this.currentOperand;
                break
            case '%':
                this.currentOperand = (this.previousOperand / 100) * this.currentOperand;
                break
            default:
                return;
        }
        this.specOperation = '';
        if (specOperation === '±' && this.operation !== undefined){
            return
        } else {
            this.previousOperand = this.currentOperand;
        }

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.currentOperand !== '' && this.previousOperand !== '') this.compute()
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = +(prev + current).toFixed(this.findLonger(prev, current));
                break
            case '-':
                computation = +(prev - current).toFixed(this.findLonger(prev, current));
                break
            case '*':
                computation = +(prev * current).toFixed(this.findLonger(prev, current));
                break
            case '^':
                computation = Math.pow(prev, current);
                break
            case '÷':
                computation = +(prev / current).toFixed(this.findLonger(prev, current));
                break
            default:
                return;
        }
        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand =''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay

        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }else {
            this.previousOperandTextElement.innerText='';
        }
    }
}