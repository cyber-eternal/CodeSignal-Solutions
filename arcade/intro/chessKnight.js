/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
solution(cell) = 2.



For cell = "c2", the output should be
solution(cell) = 6.

*/


function solution(cell) {
  const [col, row] = cell.split('');
  const obj = {'a': 4,'b': 6,'c': 8,'d': 8,'e': 8,'f': 8,'g': 6,'h': 4};
  
  switch(row) {
    case '1':
    case '8':
      return obj[col]/2;
    case '2':
    case '7':
      const x = obj[col]/2;
      return x+~~(x/2);
    default:
      return obj[col];
  }
}
