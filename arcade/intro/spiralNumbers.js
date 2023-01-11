
function solution(n) {
  var matrix = [...Array(n)].map(_ => []),
      x = 0,
      y = 0,
      dir = 2,
      size = n,
      c = 0;
  for (var i = 1; i <= n * n; i++) {
      matrix[y][x] = i;
      if (++c == size) {
          dir = (dir + 1) % 4;
          size -= dir % 2;
          c = 0;
      }
      if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
      else y += dir > 1 ? 1 : -1;
  }
  return matrix;
}
