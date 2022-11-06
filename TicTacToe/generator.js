function generateResetButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const button = document.createElement('button');
    button.append(document.createTextNode('RESET'));
    button.addEventListener('click', () => reset());
    button.classList.add('reset-button');

    buttonContainer.appendChild(button);

    const container = document.querySelector(".container");
    container.appendChild(buttonContainer);
}

function generateBoard() {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');

    for (let i = 0; i < 3; ++i) {
        const boardLineContainer = document.createElement('div');
        boardLineContainer.classList.add('board-line-container');
        for (let j = 0; j < 3; ++j) {
            const field = document.createElement('button');
            field.id = `${i}_${j}`
            field.classList.add('field');
            field.addEventListener('click', (x) => click(i, j, x))
            boardLineContainer.appendChild(field);
        }

        boardContainer.appendChild(boardLineContainer);
    }


    const container = document.querySelector(".container");
    container.appendChild(boardContainer);
}

function generateDisplay() {
    const container = document.querySelector(".container");
    const resultContainer = document.createElement('div');
    resultContainer.innerText = 'X';
    resultContainer.classList.add('result-container');
    container.appendChild(resultContainer);
}

function generate() {
    generateResetButton();
    generateBoard();
    generateDisplay();
}