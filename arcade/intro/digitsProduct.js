function solution(product) {
  if (product == 0) return 10;
  if (product == 1) return 1;
  let divisor = 10;
  let power = 1;
  let result = 0;
  
  while (product > 1) {
      if (--divisor == 1) return -1;
      while (product % divisor == 0) {
          product /= divisor;
          result += divisor * power;
          power *= 10;
      }
  }
  return result;
}
