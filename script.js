const numbers = [2, 1, 3, 4, 5];
let minimum = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (minimum > numbers[i]) {
    minimum = numbers[i];
  }
}
// console.log(minimum);

const reducer = (prev, curr) => Math.min(prev, curr);
minimum = numbers.reduce(reducer);
console.log("a minimum ez lesz: ", minimum);
