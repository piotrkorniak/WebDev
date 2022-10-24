function generateDisplay() {
    const container = document.querySelector(".container");
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    container.appendChild(resultContainer);
}

function generateButtons() {
    const buttonsDefinition = [
        [
            {text: 'LOG', action: () => onClickLog()},
            {text: 'Clr', action: () => onClickClr()},
            {text: '<-', action: () => onClickBack()},
            {text: '.', action: () => onClickDot()}
        ],
        [
            {text: '7', action: () => onClickDigit(7)},
            {text: '8', action: () => onClickDigit(8)},
            {text: '9', action: () => onClickDigit(9)},
            {text: '÷', action: () => onClickOperation('÷')}
        ],
        [
            {text: '4', action: () => onClickDigit(4)},
            {text: '5', action: () => onClickDigit(5)},
            {text: '6', action: () => onClickDigit(6)},
            {text: '*', action: () => onClickOperation('*')}
        ],
        [
            {text: '1', action: () => onClickDigit(1)},
            {text: '2', action: () => onClickDigit(2)},
            {text: '3', action: () => onClickDigit(3)},
            {text: '+', action: () => onClickOperation('+')}
        ],
        [
            {text: '0', action: () => onClickDigit(0)},
            {text: '.', action: () => onClickDot()},
            {text: '=', action: () => onClickEqual()},
            {text: '+', action: () => onClickOperation('+')}
        ],
    ]

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    for (let buttonDefinitionLine of buttonsDefinition) {
        const lineButtonContainer = document.createElement('div');
        lineButtonContainer.classList.add('line-container');
        for (let buttonDefinition of buttonDefinitionLine) {
            const button = document.createElement('button');
            button.append(document.createTextNode(buttonDefinition.text));
            button.addEventListener('click', buttonDefinition.action);
            lineButtonContainer.append(button);
        }
        buttonContainer.append(lineButtonContainer);
    }
    const container = document.querySelector(".container");
    container.appendChild(buttonContainer);
}

function generateLogs() {
    const container = document.querySelector(".container");
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('logs-container');
    container.appendChild(resultContainer);
}

function generate() {
    generateDisplay();
    generateButtons();
    generateLogs();
}