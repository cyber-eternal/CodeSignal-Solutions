/*

Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.

*/


function evenDigitsOnly(n) {
  const arr = `${n}`.split('');
  for(const i of arr){
    if(i%2) return false;
  }
  return true;
}
