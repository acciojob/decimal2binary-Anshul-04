// function decimalToBinary(decimal) {
//   let binary = "";
//   while (decimal > 0) {
//     binary = (decimal % 2) + binary;
//     decimal = Math.floor(decimal / 2);
//   }
//   return binary;
// }
function decimalToBinary(decimal) {
  return decimal.toString(2);
}
console.log(decimalToBinary(7)); // Output: 111
console.log(decimalToBinary(10)); // Output: 1010
console.log(decimalToBinary(33));

module.exports = decimalToBinary;
