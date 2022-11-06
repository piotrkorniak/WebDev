class TicTacToe {
    constructor() {
        this.isXMove = true;
    }

    reset() {
        this.handleEndGame(null);
    }

    move(row, column) {
        let field = document.getElementById(`${row}_${column}`);
        field.innerText = this.isXMove ? 'X' : '0';
        field.disabled = true;
        const result = this.checkWinner();

        if (result !== null) {
            setTimeout(()=>this.handleEndGame(result),1);
        }

        this.isXMove = !this.isXMove;
        const container = document.querySelector(".result-container");
        container.innerText = this.isXMove ? 'X' : '0';
    }

    checkWinner() {
        let b1 = document.getElementById("0_0").innerText;
        let b2 = document.getElementById("0_1").innerText;
        let b3 = document.getElementById("0_2").innerText;
        let b4 = document.getElementById("1_0").innerText;
        let b5 = document.getElementById("1_1").innerText;
        let b6 = document.getElementById("1_2").innerText;
        let b7 = document.getElementById("2_0").innerText;
        let b8 = document.getElementById("2_1").innerText;
        let b9 = document.getElementById("2_2").innerText;

        if ((b1 === 'X' || b1 === 'X') && (b2 === 'X' || b2 === 'X') && (b3 === 'X' || b3 === 'X')) {
            return 'X'
        } else if ((b1 === 'X' || b1 === 'X') && (b4 === 'X' || b4 === 'X') && (b7 === 'X' || b7 === 'X')) {
            return 'X'
        } else if ((b7 === 'X' || b7 === 'X') && (b8 === 'X' || b8 === 'X') && (b9 === 'X' || b9 === 'X')) {
            return 'X'
        } else if ((b3 === 'X' || b3 === 'X') && (b6 === 'X' || b6 === 'X') && (b9 === 'X' || b9 === 'X')) {
            return 'X'
        } else if ((b1 === 'X' || b1 === 'X') && (b5 === 'X' || b5 === 'X') && (b9 === 'X' || b9 === 'X')) {
            return 'X'
        } else if ((b3 === 'X' || b3 === 'X') && (b5 === 'X' || b5 === 'X') && (b7 === 'X' || b7 === 'X')) {
            return 'X'
        } else if ((b2 === 'X' || b2 === 'X') && (b5 === 'X' || b5 === 'X') && (b8 === 'X' || b8 === 'X')) {
            return 'X'
        } else if ((b4 === 'X' || b4 === 'X') && (b5 === 'X' || b5 === 'X') && (b6 === 'X' || b6 === 'X')) {
            return 'X'
        } else if ((b1 === '0' || b1 === '0') && (b2 === '0' || b2 === '0') && (b3 === '0' || b3 === '0')) {
            return '0'
        } else if ((b1 === '0' || b1 === '0') && (b4 === '0' || b4 === '0') && (b7 === '0' || b7 === '0')) {
            return '0'
        } else if ((b7 === '0' || b7 === '0') && (b8 === '0' || b8 === '0') && (b9 === '0' || b9 === '0')) {
            return '0'
        } else if ((b3 === '0' || b3 === '0') && (b6 === '0' || b6 === '0') && (b9 === '0' || b9 === '0')) {
            return '0'
        } else if ((b1 === '0' || b1 === '0') && (b5 === '0' || b5 === '0') && (b9 === '0' || b9 === '0')) {
            return '0'
        } else if ((b3 === '0' || b3 === '0') && (b5 === '0' || b5 === '0') && (b7 === '0' || b7 === '0')) {
            return '0'
        } else if ((b2 === '0' || b2 === '0') && (b5 === '0' || b5 === '0') && (b8 === '0' || b8 === '0')) {
            return '0'
        } else if ((b4 === '0' || b4 === '0') && (b5 === '0' || b5 === '0') && (b6 === '0' || b6 === '0')) {
            return '0'
        } else if ((b1 === 'X' || b1 === '0') && (b2 === 'X' || b2 === '0') && (b3 === 'X' || b3 === '0') && (b4 === 'X' || b4 === '0') && (b5 === 'X' || b5 === '0') && (b6 === 'X' || b6 === '0') && (b7 === 'X' || b7 === '0') && (b8 === 'X' || b8 === '0') && (b9 === 'X' || b9 === '0')) {
            return 'tie'
        } else {
            return null;
        }
    }

    handleEndGame(result) {
        switch (result) {
            case 'X':
                alert('X WIN');
                break;
            case '0':
                alert('0 WIN');
                break;
            case 'tie':
                alert('Tie');
                break;
        }

        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                document.getElementById(`${i}_${j}`).innerText = '';
                document.getElementById(`${i}_${j}`).disabled = false;
            }
        }
        this.isXMove = true;
        const container = document.querySelector(".result-container");
        container.innerText = this.isXMove ? 'X' : '0';
    }
}