
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

//NEED FUNCTION THAT FIGURES OUT IDs of NEIGHBORS
function num_neighbors(cells, diff) {
    console.log(cells.length);
    for (var i = 0; i < cells.length-cells.length+10; i++) {
        c = cells[i];
        //console.log(c.id);
        c.neighbors = [ parseInt(c.id)-diff-1, parseInt(c.id)-diff, parseInt(c.id)-diff+1, parseInt(c.id)-1, parseInt(c.id)+1, parseInt(c.id)+diff-1, parseInt(c.id)+diff, parseInt(c.id)+diff+1];
        console.log(c.neighbors);
    }
}

function play() {
    //start the generations
    console.log('kittens');
}


$(document).ready(function() {

rows = 30;
cols = 80;
var grid = gridInit(rows,cols);
document.body.appendChild(grid);
num_neighbors(grid.Cells);

});



