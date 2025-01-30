const cells = document.querySelectorAll('.cell');
const resultText = document.getElementById('result');
let currentPlayer = 'X';
let board = ["", "", "", "", "", "", "", "", ""];

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        let index = cell.getAttribute('data-index');
        if (!board[index]) {
            board[index] = currentPlayer;
            cell.innerText = currentPlayer;
            cell.classList.add('text-2xl');
            if (checkWinner()) {
                resultText.innerText = `${currentPlayer} Wins!`;
                disableBoard();
            } else if (!board.includes("")) {
                resultText.innerText = "It's a Draw!";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    return winPatterns.some(pattern => 
        board[pattern[0]] && board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]
    );
}

function disableBoard() {
    cells.forEach(cell => cell.style.pointerEvents = 'none');
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.innerText = "";
        cell.style.pointerEvents = 'auto';
    });
    resultText.innerText = "";
}
