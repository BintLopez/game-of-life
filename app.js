//

function Cell(config, i) {
    config = config || {};
    this.id = i
    this.isAlive = config.isAlive || "false";
    this.neighbors = config.neighbors || [];
};

// //FUNCTION THAT INSTANTIATES AN OBJECT

// function QuestionLib(formQuestions) {
//   this.items = [];
//   for (var i = 0; i < formQuestions.length; i++) {
//     this.items.push(new Question(formQuestions[i]));
//   }
// };

// // Calls the function QuestionLib and adds the results of the function to var questionList
// var questionsList = new QuestionLib(formQuestions);

function gridInit( rows, cols ){
    var i=1;
    var grid = document.createElement('table');
    var Cells = [];
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = new Cell(i)
            var td = document.createElement('td');
            td.innerHTML = i;
            tr.appendChild(td);
            Cells.push(cell);
            i = ++i;
        }
    }
    return grid;
}

//don't expect this to work right now
function aliveInit() {
    if (cell.id % 400 === 0) {
        //var cell.alive = true;
        grid.aliveArray.push(cell);
    }
}

//THIS FUNCTION IS WHAT BROKE THINGS
function aliveDisplay(cells) {
    for (i in cells) {
        if (cells[i].isAlive) {
            cells[i].setAttribute('class', 'alive');
        }
    }
}

//NEED FUNCTION THAT FIGURES OUT IDs of NEIGHBORS
function find_neighbors(id) {
    neighbors = [ parseInt(id)-cols-1, parseInt(id)-cols, parseInt(id)-cols+1, parseInt(id)-1, parseInt(id)+1, parseInt(id)+cols-1, parseInt(id)+cols, parseInt(id)+cols+1];
    return neighbors;
}

function num_neighbors(cells, cols) {
    console.log(cells.length);
    for (var i = 0; i < cells.length-cells.length+10; i++) {
        c = cells[i];
        //console.log(c.id);
        c.neighbors = find_neighbors(c.id);
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
aliveDisplay(grid.aliveArray);
//num_neighbors(grid.Cells, cols);

});



