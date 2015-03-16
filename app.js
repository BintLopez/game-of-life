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

var grid = makeGrid(30,30);

document.body.appendChild(grid);

function makeGrid( rows, cols ){
    var i=0;
    var grid = document.createElement('table');
    grid.aliveArray = [];
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.id = ++i;
            if (cell.id % 100 === 0) {
                var alive = true;
                grid.aliveArray.push(cell);
            }
        }
    }
    console.log(grid.aliveArray);
    return grid;
}

var $playBtn = $('#playBtn');
function play() {
    for (x in grid.aliveArray) {
        console.log('kittens');
    }
}
$playBtn.on('click', play());



