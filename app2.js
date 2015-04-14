var config = {};

function Cell(config, x, y) {
    config = config || {};
    this.x = x;
    this.y = y; 
    this.isAlive = config.isAlive || "false";
    this.neighbors = config.neighbors || [];
};

function cellCreator(rows, cols) {
	for (var y=0; y<rows; y++) {
		cells[y] = [];
		for (var x=0; x<cols; x++) {
			cells[y][x] = new Cell(config, x, y);
		}
	}
}

function cellDisplay() {
	var $grid = $("<table>");
	for (y in cells) {
		var $row = $('<tr>');
		$grid.append($row);
		for (x in cells[y]) {
			var $cell = ('<td>');
			//$cell.css('background', 'yellow');
			$row.append($cell);
			//$cell.isAlive = true;
			//cells[y][x].jqueryElement = $cell;
		}
	}
	$('#board').append($grid).addClass('grid');
}

//this function runs every frame of the game and will update the css class of the cell
function generation() {
    for (y in cells) {
    	for (x in cells[y]) {
    		if (cells[y][x].isAlive === true) {
    		// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	    		if (cells[y][x].num_neighbors < 2) {
	    			cells[y][x].isAlive = false;
	    		}
	    		// Any live cell with two or three live neighbours lives on to the next generation.
	    		else if (cells[y][x].num_neighbors === 2 || cells[y][x].num_neighbors === 3 ) {
					cells[y][x].isAlive = true;
				}
	    		// Any live cell with more than three live neighbours dies, as if by overcrowding.
	    		else if (cells[y][x].num_neighbors > 3) {
	    			cells[y][x].isAlive = false;
	    		}
    		}
    		else {
	    		// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.	
	    		if (cells[y][x].num_neighbors === 3) {
	    			cells[y][x].isAlive = true;
	    		}
    		}
    	}
    }
}

//need function that counts num neighbors for each cell

//function that computes the neighbors for each cell (this needs to happen after all the cells are created)
// ie after cellCreator()

//function that updates the CSS class using jQuery addClass, removeClass every frame depending on when its alive or dead
function generation() {
    for (y in cells) {
    	for (x in cells[y]) {
    		if (cells[y][x].isAlive === true) {
    			cells[y][x].addClass('alive');
    		}
    	}
    }
}

//function -- need alive initializer function

// future ideas  -- change cells alive or nah on click

//start function that starts playing onclick
    setInterval(function() {
          // Do something every 2 seconds
    }, 2000);




var cells = [];

cellCreator(10, 10);
cellDisplay();
generation();