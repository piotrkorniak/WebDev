function init() {
    let canvas = document.getElementById("game");
    let ctx = canvas.getContext("2d");

    let ballRadius = 10;

    let xCoordinate;
    let yCoordinate;
    let xSpeed;
    let ySpeed;
    let paddleX;

    let paddleHeight = 10;
    let paddleWidth = 150;

    let brickRowCount = 4;
    let brickColumnCount = 16;

    let brickWidth = 75;
    let brickHeight = 20;
    let brickPadding = 10;

    let brickOffsetTop = 30;
    let brickOffsetLeft = (canvas.width - ((brickWidth * brickColumnCount) + (brickPadding * (brickColumnCount - 1)))) / 2;

    let bricks = [];

    document.addEventListener("mousemove", mouseMoveHandler, false);

    function mouseMoveHandler(e) {
        let relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth / 2;
        }
    }

    function collisionDetection() {
        for (let brickRow of bricks) {
            for (let brick of brickRow) {
                if (brick.status === 1) {
                    if (xCoordinate > brick.xCoordinate && xCoordinate < brick.xCoordinate + brickWidth && yCoordinate > brick.yCoordinate && yCoordinate < brick.yCoordinate + brickHeight) {
                        ySpeed = -ySpeed;
                        brick.status = 0;
                    }
                }
            }
        }

    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(xCoordinate, yCoordinate, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }

    function drawBricks() {
        let brickRowIterator = 0;
        for (let brickRow of bricks) {
            let brickColumnIterator = 0;
            for (let brick of brickRow) {
                if (brick.status === 1) {
                    let brickX = (brickRowIterator * (brickWidth + brickPadding)) + brickOffsetLeft;
                    let brickY = (brickColumnIterator * (brickHeight + brickPadding)) + brickOffsetTop;
                    brick.xCoordinate = brickX;
                    brick.yCoordinate = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "green";
                    ctx.fill();
                    ctx.closePath();
                }
                brickColumnIterator++;
            }
            brickRowIterator++;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        collisionDetection();
        if (checkEndGame()) {
            alert("WIN");
            initGame();
        }

        if (xCoordinate + xSpeed > canvas.width - ballRadius || xCoordinate + xSpeed < ballRadius) {
            xSpeed = -xSpeed;
        }

        if (yCoordinate + ySpeed < ballRadius) {
            ySpeed = -ySpeed;
        } else if (yCoordinate + ySpeed > canvas.height - ballRadius) {
            if (xCoordinate > paddleX && xCoordinate < paddleX + paddleWidth) {
                ySpeed = -ySpeed;
            } else {
                alert("GAME OVER");
                initGame();
            }
        }

        xCoordinate += xSpeed;
        yCoordinate += ySpeed;
        requestAnimationFrame(draw);
    }

    function checkEndGame() {
        for (let brickRow of bricks) {
            for (let brick of brickRow) {
                if (brick.status === 1) {
                    return false;
                }
            }
        }
        return true;
    }

    function initGame() {
        for (let c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for (let r = 0; r < brickRowCount; r++) {
                bricks[c][r] = {xCoordinate: 0, yCoordinate: 0, status: 1};
            }
        }

        xCoordinate = canvas.width / 2;
        yCoordinate = canvas.height - 30;
        xSpeed = 4;
        ySpeed = -4;
        paddleX = (canvas.width - paddleWidth) / 2;
    }

    initGame();
    draw();
}