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

// var $board = $('#board');
// var boardHeight = 30;
// var boardWidth = 30;

// // function Cell(config) {
// //     config = config || {};
// //     this.state = config.state || "alive"; // alive or dead
// // };

// function createBoard(height, width) {
// 	// var $cell = $('<div>').addClass('cell');
// 	// $cell.alive = true;
// 	// $board.append($cell);
// 	var $grid = $('<table>')

// }

// createBoard(boardHeight, boardWidth);

var lastClicked;
var grid = clickableGrid(30,30,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});

document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            //cell.innerHTML = ++i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

