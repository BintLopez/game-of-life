##Conway's Game of Life made in javascript and jquery!

###Rules

    1 - Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    2 - Any live cell with two or three live neighbours lives on to the next generation.
    3 - Any live cell with more than three live neighbours dies, as if by overcrowding.
    4 - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

###Lessons Learned in the Making

- Unless you have a very specific reason, do NOT use the following syntax for for loops: for (thing in things) {}
- I thought that for ... in was equivalent to for (i=0; i<max; i++) {}... but do not be deceived. These are not equivalent.
