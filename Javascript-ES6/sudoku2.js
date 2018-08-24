var count = new Array(9).fill(0)

function verify(xstart, xstop, ystart, ystop, grid) {
    for (x = xstart; x < xstop; x++){
        for (y = ystart; y < ystop; y++){
            if (grid[x][y] == "."){
                continue
            }
            else {
                count[Number(grid[x][y]) - 1] += 1
            }
        }   
    }    
    for (l = 0; l < count.length; l++){
            if (count[l] > 1){
                return false      
          }
        }
    count.fill(0)
    return true
}
    
function sudoku2(grid) {
//Check each row for dupes   
    for (x = 0; x < 9; x++){
        for (y = 0; y < 9; y++){
            if (grid[x][y] == "."){
                continue
            }
            else {
                count[Number(grid[x][y]) - 1] += 1
            }
        }
        
        for (l = 0; l < count.length; l++){
            //console.log(count[l])
            if (count[l] > 1){
                return false
            }
        }
        count.fill(0)
    } 
//--------------------------------------------------------
//Check each column for dupes
    for (j = 0; j < 9; j++){
        for (k = 0; k < 9; k++){
            if (grid[k][j] == "."){
                continue
            }
            else {
                count[Number(grid[k][j]) - 1] += 1
            }
        }
        
        for (l = 0; l < count.length; l++){
            if (count[l] > 1){
                return false
            }
        }
        count.fill(0)
    }   
//---------------------------------------------------------
//Check each 3x3 for dupes
    if (verify(0,3,0,3, grid) == false) {return false}
    if (verify(3,6,0,3, grid) == false) {return false}
    if (verify(6,9,0,3, grid) == false) {return false}
    if (verify(0,3,3,6, grid) == false) {return false}
    if (verify(3,6,3,6, grid) == false) {return false}
    if (verify(6,9,3,6, grid) == false) {return false}
    if (verify(0,3,6,9, grid) == false) {return false}
    if (verify(3,6,6,9, grid) == false) {return false}
    if (verify(6,9,6,9, grid) == false) {return false}
    
    return true
}




/* Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, 
and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout 
rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only 
contain the numbers 1 through 9 one time.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

[output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false.
*/
