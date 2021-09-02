/*

Given two cells on the standard chess board, determine whether they have the same color or not.
For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.

For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.

*/


function isBlack(cell){
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const numbers = [1,2,3,4,5,6,7,8];
  const cellArr = cell.split('');
  const cellRow = letters.indexOf(cellArr[0]);
  const cellColl = numbers.indexOf(+cellArr[1])
  if((cellRow%2 && cellColl%2) || (!(cellRow%2) && !(cellColl%2))) return true;
  return false
}


function chessBoardCellColor(cell1, cell2) {
  if(cell1 === cell2) return true;
  return isBlack(cell1) === isBlack(cell2);
}



/*

//Get the color (0=black, 1=white) for a given cell
var color = s => (Buffer(s)[0] - s[1])%2

var chessBoardCellColor = (a,b) => color(a) == color(b)

*/
