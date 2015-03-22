//

// function Grid(config) {
//     config = config || {};
//     this.question = config.question || " ";
//     this.possibleAnswers = config.possibleAnswers || " ";
//     this.inputType = config.inputType || "text"; //possible answers 'checkbox', 'radio', or 'text'
//     this.name  = config.name || " ";
//     this.onPage = config.onPage || " ";
// };

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
            if (cell.id % 200 === 0) {
                    //var cell.alive = true;
                    grid.aliveArray.push(cell);
            }
        }
    }
    console.log(grid.aliveArray);
    return grid;
}

//NEED FUNCTION THAT FIGURES OUT IDs of NEIGHBORS
function find_neighbors(id) {
    neighbors = [ parseInt(id)-cols-1, parseInt(id)-cols, parseInt(id)-cols+1, parseInt(id)-1, parseInt(id)+1, parseInt(id)+cols-1, parseInt(id)+cols, parseInt(id)+cols+1];
    return neighbors;
}

//THIS FUNCTION IS WHAT BROKE THINGS
function aliveDisplay(cells) {
    for (i in cells) {
        if (cells[i].alive) {
            cells[i].setAttribute('class', 'alive');
        }
    }
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



