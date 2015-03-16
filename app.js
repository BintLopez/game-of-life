/*
Initial set up designates certain cells alive or dead

Upon starting the program, there are 'generations'
For each generation, cells either are alive or dead based on the number of alive or dead neighbors

Alive/Dead state for each new generation determined by the following rules:

for each cell that's alive...
	if neighbors < 2
		cell = dead
	if 1 < neighbors < 4
		cell = alive
	if neighbors > 3
		cell = dead

for each cell that's dead...
	if neighbors === 3
		cell = alive
*/ 

var $board = $('#board');
var boardHeight = 30;
var boardWidth = 30;

// function Cell(config) {
//     config = config || {};
//     this.state = config.state || "alive"; // alive or dead
// };

function createBoard(height, width) {
	var $cell = $('<div>').addClass('cell');
	$cell.alive = true;
	$board.append($cell);
}

createBoard(boardHeight, boardWidth);

