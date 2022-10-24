function onClickLog() {
    const logsContainer = document.querySelector(".logs-container");
    logsContainer.replaceChildren();

    const logs = calculator.getLogs();
    for (const log of logs) {
        const logDiv = document.createElement('div');
        logDiv.append(document.createTextNode(log));
        logsContainer.append(logDiv);
    }
}

function onClickDigit(digit) {
    calculator.appendNumber(digit)
    calculator.updateDisplay()
}

function onClickClr() {
    calculator.clear()
    calculator.updateDisplay()
}

function onClickBack() {
    calculator.delete()
    calculator.updateDisplay()
}

function onClickOperation(operation) {
    calculator.chooseOperation(operation)
    calculator.updateDisplay()
}

function onClickEqual() {
    calculator.compute()
    calculator.updateDisplay()
}

function onClickDot() {
    calculator.appendNumber('.')
    calculator.updateDisplay()
}

function updateScreen(value) {
    const screen = document.querySelector(".result-container");
    screen.innerText = value;
}
