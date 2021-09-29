import { Calculator } from "./calculator.js";

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendOperator( button.innerText, button.getAttribute("data-btn"))
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.buildResult();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})