var currentPlayer = 'Player1';

// Board array.

var board = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
];

function Figure(team, row, col) {
    this.team = team;
    this.row = row;
    this.col = col;
    this.queen = false; //no queens on start
}
// Figure out possible moves
Figure.prototype.getPossibleMoves = function() {
    var possibleMoves = [];
    if (this.team === 'Player1') {          //white moves
        possibleMoves.push([this.row + 1, this.col - 1]);
        possibleMoves.push([this.row + 1, this.col + 1]);
    } else {                                //black moves
        possibleMoves.push([this.row - 1, this.col - 1]);
        possibleMoves.push([this.row - 1, this.col + 1]);
    }
    if (this.queen === true) {
        if (this.team === "Player1") {          //white moves
            possibleMoves.push([this.row - 1, this.col - 1]);
            possibleMoves.push([this.row - 1, this.col + 1]);

        } else {                                //black moves
            possibleMoves.push([this.row + 1, this.col - 1]);
            possibleMoves.push([this.row + 1, this.col + 1]);
        }
    }
    if (currentPlayer === 'Player1') {
        if (board[this.row + 1][this.col + 1] !== null && board[this.row + 1][this.col + 1].team !== currentPlayer) {
            possibleMoves.push(this.row + 2, this.col + 2)
        }
        if (board[this.row + 1][this.col - 1] !== null && board[this.row + 1][this.col - 1].team !== currentPlayer) {
            possibleMoves.push(this.row + 2, this.col - 2)

        }
    } else {
        if (board[this.row - 1][this.col + 1] !== null && board[this.row - 1][this.col + 1].team !== currentPlayer) {
            possibleMoves.push([this.row - 2, this.col + 2]);
        }
        if (board[this.row - 1][this.col - 1] !== null && board[this.row - 1][this.col - 1].team !== currentPlayer) {
            possibleMoves.push([this.row - 2, this.col - 2]);
        }
    }
    return possibleMoves;
};

console.log(board);

