 var config = {};

function Cell(config, x, y) {
    config = config || {};
    this.x = x;
    this.y = y; 
    this.isAlive = config.isAlive || false;
    this.neighbors = config.neighbors || [];
};

//creates instances of the cell object based on amount of rows, cols in grid
function cellCreator(rows, cols) {
	for (var y=0; y<rows; y++) {
		cells[y] = [];
		for (var x=0; x<cols; x++) {
			cells[y][x] = new Cell(config, x, y);
		}
	}
}

//need to give each cell an id in the DOM
function cellDisplay() {
	var $grid = $("<table>");
	for (y in cells) {
		var $row = $('<tr>');
		$grid.append($row);
		for (x in cells[y]) {
			var $cell = $('<td id="cell_'+ y +'_' + x +'">');
			$cell.append($('<p>'+ y +', ' + x +'</p>'));
			//function checks isAlive for true & adds class 'alive'
			aliveClass(y, x, $cell);
			$row.append($cell);
		}
	}
	$('#board').append($grid).addClass('grid');
}

//finds the neighbors for each cell given its coordinates
//should refactor this to take a cells y and x and return array of neighbors -- purpose of this is to take neighbors array out of the cell object
function findNeighbors(y, x) {

	//neighbors for cells at top edge of grid
	if (y === 0 && 0 < x && x < (cols-1)) {
		cells[y][x].neighbors = [ cells[y][x-1], cells[y][x+1], cells[y+1][x-1], cells[y+1][x], cells[y+1][x+1] ];
	}
	//neighbors for cells at bottom edge of grid
	else if (y === (rows-1) && 0 < x && x < (cols-1)) {
		cells[y][x].neighbors = [ cells[y-1][x-1], cells[y-1][x], cells[y-1][x+1], cells[y][x-1], cells[y][x+1] ];				
	}

	//neighbors for cells on left edge of grid
	else if (0 < y && y < (rows-1) && x === 0) {
		cells[y][x].neighbors = [ cells[y-1][x], cells[y-1][x+1], cells[y][x+1], cells[y+1][x], cells[y+1][x+1] ];
	}
			
	//neighbors for cells on right edge of grid
	else if (0 < y && y < (rows-1) && x === (cols-1)) {
		cells[y][x].neighbors = [ cells[y-1][x], cells[y-1][x-1], cells[y][x-1], cells[y+1][x], cells[y+1][x-1] ];
	}

	//neighbors for upper left corner cell
	else if (y === 0 && x === 0) {
		cells[y][x].neighbors = [ cells[y][x+1], cells[y+1][x+1], cells[y+1][x] ];
	}

	//neighbors for upper right corner cell
	else if (y === 0 && x === (cols-1)) {
		cells[y][x].neighbors = [ cells[y][x-1], cells[y+1][x-1], cells[y+1][x] ];
	}

	//neighbors for lower left corner cell
	else if (y === (rows-1) && x === 0) {
		cells[y][x].neighbors = [ cells[y][x+1], cells[y-1][x+1], cells[y-1][x] ];
	}

	//neighbors for lower right corner cell
	else if (y === (rows-1) && x === (cols-1)) {
		cells[y][x].neighbors = [ cells[y][x-1], cells[y-1][x-1], cells[y-1][x] ];
	}
			
	//neighbors for all middle cells
	else {
		cells[y][x].neighbors = [ cells[y-1][x-1], cells[y-1][x], cells[y-1][x+1], cells[y][x-1], cells[y][x+1], cells[y+1][x-1], cells[y+1][x], cells[y+1][x+1] ];
	}
	console.log(cells[y][x].neighbors);
}

//function that takes a cell obj & returns the number of alive neighbors
function numAliveNeighbors(cell) {
	i = 0;
	//console.log(cell);
	var neighbors = cell.neighbors;
	//console.log(neighbors);
	for (n in neighbors) {
		if (neighbors[n].isAlive === true) {
			i += 1;
		}
	}
	//console.log(numAlive);
	cell.numNeighbors = i;
}

//function that sets that checks if cells are alive & adds class alive
function aliveClass(y, x, $cell) {
    if (cells[y][x].isAlive === true) {
    	$cell.addClass('alive');
    }
}

//given cell's coordinates checks if cell is alive & adds class alive
function aliveCheck(y, x) {
	if (cells[y][x].isAlive === true) {
		$('#cell_'+ y +'_' + x).addClass('alive');
	}
}

//sets up which cells start out alive
function aliveInit() {
	for (y in cells) {
		for (x in cells[y]) {
			//eventually make this randomized
			if (x % 2 === 0) {
				cells[y][x].isAlive = true;
			}
		}
	}
}

//this function runs every frame of the game and will update the css class of the cell
function generation() {
	//var numAlive = 0;
    for (y in cells) {
    	for (x in cells[y]) {
    		numAliveNeighbors(cells[y][x]);
    		if (cells[y][x].isAlive === true) {
    		// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	    		if (cells[y][x].numNeighbors < 2) {
	    			cells[y][x].isAlive = false;
	    		}
	    		// Any live cell with two or three live neighbours lives on to the next generation.
	    		else if (cells[y][x].numNeighbors === 2 || cells[y][x].num_neighbors === 3 ) {
					cells[y][x].isAlive = true;
					aliveClass(y, x, $cell);
				}
	    		// Any live cell with more than three live neighbours dies, as if by overcrowding.
	    		else if (cells[y][x].numNeighbors > 3) {
	    			cells[y][x].isAlive = false;
	    		}
    		}
    		else {
	    		// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.	
	    		if (cells[y][x].numNeighbors === 3) {
	    			cells[y][x].isAlive = true;
	    			aliveClass(y, x, $cell);
	    		}
    		}
    		//update the display each frame?
    		//cellDisplay();
    		//aliveClass();
    	}
    }
}

//start function that starts playing onclick
function autoUpdate() {
	console.log(autoUpdate);

}

//FYI -- syntax declaring empty array (single instead of double) could be source of bugs in future
var cells = [];

var cols = 10;
var rows = 10;

cellCreator(rows, cols);
//aliveInit() currently only works before cellDisplay() is called 
//aliveInit();
cellDisplay();
//findNeighbors(0, 0);
cells[4][3].isAlive = true;
aliveCheck(4, 3);
console.log($grid);

// numAliveNeighbors(cells[2][3]);
// console.log(cells[2][3].numNeighbors);

//generation();



//Both of these work to console log kittens but not to make cells[y][x].isAlive true. Have tried this code outside of document ready, and before and after defining all variables and calling all functions

// function play() {
// 	console.log('kittens');
// 	cells[4][3].isAlive = true;
// }

$('#playBtn').click(function() {
	console.log('kittens');
	//generation();
	cells[4][3].isAlive = true;
	aliveCheck($grid);
	//cellDisplay();
});

	setInterval(function() {
		autoUpdate;
          //console.log('squid');
    }, 2000);
