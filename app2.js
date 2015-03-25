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
			$row.append($cell);
		}
	}
	$('#board').append($grid).addClass('grid');
}

var cells = [];

cellCreator(10, 10);
cellDisplay();