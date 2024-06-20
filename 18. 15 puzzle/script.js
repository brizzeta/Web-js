const gameBoard = $(".game-board"), startBtn = $(".retry-butt");
let emptyCellIndex, startTime;
const cells = [], numRows = 4, numCols = 4;

function createCell(number) {
    const cell = $("<div>").addClass("cell").text(number + 1);
    if (number === numRows * numCols - 1) cell.addClass("empty");
    gameBoard.append(cell);
    return cell;
}

function shuffleCells() {
    cells.sort(() => Math.random() - 0.5);
    gameBoard.empty();
    cells.forEach(index => gameBoard.append(createCell(index)));
}

function initializeGame() {
    for (let i = 0; i < numRows * numCols; i++)  cells.push(i);
    shuffleCells();
    startTime = Date.now();
}

function checkVictory() { return cells.every((index, i) => index === i); }

function celebrateVictory() {
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    gameBoard.off("click", ".cell");
    alert(`Поздравляем! Вы выиграли! Ваше время: ${timeTaken.toFixed(2)} секунды.`);
}

function moveCell(cellIndex) {
    if (cells[cellIndex - 4] === 15) {
        cells[cellIndex - 4] = cells[cellIndex];
        cells[cellIndex] = 15;
    } else if (cells[cellIndex - 1] === 15 && (cellIndex - 1) % 4 !== 3) {
        cells[cellIndex - 1] = cells[cellIndex];
        cells[cellIndex] = 15;
    } else if (cells[cellIndex + 1] === 15 && (cellIndex + 1) % 4 !== 0) {
        cells[cellIndex + 1] = cells[cellIndex];
        cells[cellIndex] = 15;
    } else if (cells[cellIndex + 4] === 15) {
        cells[cellIndex + 4] = cells[cellIndex];
        cells[cellIndex] = 15;
    } else return;
    gameBoard.empty();
    cells.forEach(index => gameBoard.append(createCell(index)));
    if (checkVictory()) celebrateVictory();
}

startBtn.on("click", function () {
    shuffleCells();
    startTime = Date.now();
});

gameBoard.on("click", ".cell", function () {
    moveCell($(this).index());
});

initializeGame();