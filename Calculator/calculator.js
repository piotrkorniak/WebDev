class Calculator {
    constructor() {
        this.clear()
    }

    clear() {
        this.lineHistory = [];
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if (isNaN(prev) || isNaN(current)) {
            return;
        }

        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.lineHistory.push(`${this.getDisplayText()} =  ${computation}`);

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        const integerDisplay = isNaN(integerDigits) ? '' : integerDigits.toLocaleString('en', {maximumFractionDigits: 0});

        return decimalDigits == null ? integerDisplay : `${integerDisplay}.${decimalDigits}`;
    }

    updateDisplay() {
        updateScreen(this.getDisplayText())
    }

    getDisplayText() {
        return `${this.getDisplayNumber(this.previousOperand) ?? ''} ${this.operation ?? ''} ${this.getDisplayNumber(this.currentOperand) ?? ''}`;
    }

    getLogs() {
        return this.lineHistory;
    }
}