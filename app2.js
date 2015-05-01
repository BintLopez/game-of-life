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
			$row.append($cell);
		}
	}
	$('#board').append($grid).addClass('grid');
}

//finds the neighbors for each cell given its coordinates
//should refactor this to take a cells y and x and return array of neighbors -- purpose of this is to take neighbors array out of the cell object
function findNeighbors(y, x) {
	//console.log("kittens inside the findNeighbors function!")

	//neighbors for cells at top edge of grid
	if (y === 0 && 0 < x && x < (cols-1)) {
		var neighbors = [ cells[y][x-1], cells[y][x+1], cells[y+1][x-1], cells[y+1][x], cells[y+1][x+1] ];
	}
	//neighbors for cells at bottom edge of grid
	else if (y === (rows-1) && 0 < x && x < (cols-1)) {
		var neighbors = [ cells[y-1][x-1], cells[y-1][x], cells[y-1][x+1], cells[y][x-1], cells[y][x+1] ];				
	}

	//neighbors for cells on left edge of grid
	else if (0 < y && y < (rows-1) && x === 0) {
		var neighbors = [ cells[y-1][x], cells[y-1][x+1], cells[y][x+1], cells[y+1][x], cells[y+1][x+1] ];
	}
			
	//neighbors for cells on right edge of grid
	else if (0 < y && y < (rows-1) && x === (cols-1)) {
		var neighbors = [ cells[y-1][x], cells[y-1][x-1], cells[y][x-1], cells[y+1][x], cells[y+1][x-1] ];
	}

	//neighbors for upper left corner cell
	else if (y === 0 && x === 0) {
		var neighbors = [ cells[y][x+1], cells[y+1][x+1], cells[y+1][x] ];
	}

	//neighbors for upper right corner cell
	else if (y === 0 && x === (cols-1)) {
		var neighbors = [ cells[y][x-1], cells[y+1][x-1], cells[y+1][x] ];
	}

	//neighbors for lower left corner cell
	else if (y === (rows-1) && x === 0) {
		var neighbors = [ cells[y][x+1], cells[y-1][x+1], cells[y-1][x] ];
	}

	//neighbors for lower right corner cell
	else if (y === (rows-1) && x === (cols-1)) {
		var neighbors = [ cells[y][x-1], cells[y-1][x-1], cells[y-1][x] ];
	}
			
	//neighbors for all middle cells
	else {
		var neighbors = [ cells[y-1][x-1], cells[y-1][x], cells[y-1][x+1], cells[y][x-1], cells[y][x+1], cells[y+1][x-1], cells[y+1][x], cells[y+1][x+1] ];
	}
	//console.log(neighbors);
	return neighbors;
}

//function that takes a cell obj & returns the number of alive neighbors
//CHANGE THIS... PHASE OUT CELLS.NEIGHBORS 
var numAliveNeighbors = function(neighbors, y, x) {
	i = 0;
	for (var n = 0; n < neighbors.length; n++) {
		if (neighbors[n].isAlive === true) {
			i += 1;
		}
	}
	numAlive = i;
	return numAlive;
}

//given cell's coordinates checks if cell is alive & adds class alive
var aliveCheck = function(y, x) {
	console.log("kittens inside the aliveCheck function!")
	if (cells[y][x].isAlive) {
		$('#cell_'+ y +'_' + x).addClass('alive');
	}
	else {
		$('#cell_'+ y + '_' + x).removeClass('alive');
	}
}

//sets up which cells start out alive given the value numAliveStart -- this variable is defined as half the amount of cells in the grid
function aliveInit(numAliveStart) {
	console.log("kittens inside the aliveInit function!")
	for (var i = 0; i < numAliveStart; i++) {
		y = Math.floor(Math.random() * (rows - 0) + 0);
		x = Math.floor(Math.random() * (cols - 0) + 0);
		// console.log("y is "+ y);
		// console.log("x is "+ x);
		cells[y][x].isAlive = true;
		aliveCheck(y, x);
	}
}

//this takes a cell's coordinates & # of neighbors & determines whether the cell lives, dies, or regenerates for the next round 
function generation(numAlive, y, x) {
	console.log("kittens inside the generation function!")
    if (cells[y][x].isAlive === true) {
    	// console.log('cell '+ y + ', '+x+' is alive');
    	// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	    if (numAlive < 2) {
	    	// console.log('cell '+y+', '+x+' has less than 2 alive neighbors')
	    	cells[y][x].isAlive = false;
	    }
	    // Any live cell with two or three live neighbours lives on to the next generation.
	    else if (numAlive === 2 || numAlive === 3 ) {
			// console.log('cell '+y+', '+x+' exactly 2 or 3 alive neighbors')
			cells[y][x].isAlive = true;
		}
	    // Any live cell with more than three live neighbours dies, as if by overcrowding.
	   else if (numAlive > 3) {
	   		// console.log('cell '+y+', '+x+' has more than 3 alive neighbors')
	    	cells[y][x].isAlive = false;
	    }
    }
    else {
    	console.log('cell '+ y + ', '+x+' is dead');
	    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.	
	    if (numAlive === 3) {
	    	// console.log('cell '+y+', '+x+' has exactly 3 alive neighbors')
	    	cells[y][x].isAlive = true;
	    }
    }
    aliveCheck(y, x);
}

//start function that starts playing onclick
function autoUpdate() {
	console.log(autoUpdate);

}

function play() {
	//console.log('click');
	setInterval(function() {
		for (var y = 0; y < cells.length; y++) {
			for (var x = 0; x < cells[y].length; x++) {	
				var neighbors = findNeighbors(y, x);
				//console.log(neighbors);
				var numAlive = numAliveNeighbors(neighbors, y, x);
				//console.log(numAlive);
				generation(numAlive, y, x);
			}
		}
    }, 2000);
}

function testInit() {
	//TESTING GRID
	cells[0][0].isAlive = true;
	cells[0][1].isAlive = true;
	cells[2][2].isAlive = true;
	cells[3][0].isAlive = true;
	cells[4][1].isAlive = true;
	cells[4][3].isAlive = true;
	cells[5][2].isAlive = true;
	cells[5][3].isAlive = true;
	cells[0][0].isAlive = true;
}


//FYI -- syntax declaring empty array (single instead of double) could be source of bugs in future
var cells = [];
var cols = 4;
var rows = 6;
var numAliveStart = cols * rows / 2;

//create cell objects
cellCreator(rows, cols);

//display cells in grid
cellDisplay();

//initiate which cells start out alive
//aliveInit(numAliveStart);
testInit();


$('#playBtn').click(play);


// findNeighbors(1,3);
// console.log(neighbors);

for (y=0; y < cells.length; y++) {
	for (var x = 0; x < cells[y].length; x++) {
		//add alive class display
		aliveCheck(y, x);
		//calculates & returns array of neighboring cells

	}
}



// cells[4][3].isAlive = true;
// aliveCheck(4, 3);

// numAliveNeighbors(y, x);

//generation();



//Both of these work to console log kittens but not to make cells[y][x].isAlive true. Have tried this code outside of document ready, and before and after defining all variables and calling all functions

// function play() {
// 	console.log('kittens');
// 	cells[4][3].isAlive = true;
// }


	setInterval(function() {
		autoUpdate;
          //console.log('squid');
    }, 2000);
