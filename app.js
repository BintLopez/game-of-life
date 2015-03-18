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
//var $board = $('#board');
function gridInit( rows, cols ){
    var i=0;
    var grid = document.createElement('table');
    grid.Cells = [];
    grid.aliveArray = [];
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.id = ++i;
            grid.Cells.push(cell);
            if (cell.id % 67 === 0 || cell.id %75 === 0 || cell.id %25 === 0) {
                var alive = true;
                cell.setAttribute('class', 'alive');
                grid.aliveArray.push(cell);
            }
        }
    }
    //console.log(grid.aliveArray);
    return grid;
}

function play() {
    console.log('kittens');
}


$(document).ready(function() {





//this function iterates through the aliveArray 
// function play(aliveArray) {
//     for (x in aliveArray) {
//         aliveArray[x].setAttribute('class', 'alive');
//     }
// }




rows = 30;
cols = 80;
var grid = gridInit(rows,cols);
document.body.appendChild(grid);

//var playBtn = document.getElementById('playBtn');
//playBtn.setAttribute('onclick', 'play()'); 

});



