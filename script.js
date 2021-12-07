const ages = [2, 4, 8, 14];
const map1 = ages.map((x) => x * 2);

console.log(map1);

const array2 = [2, 4, 8, 14];
const map2 = array2.map(myFunction);
function myFunction(num) {
  return num * 5;
}

console.log(map2);

const array3 = [2, 4, 8, 14];
const map3 = array3.map((x, i) => x * i);

console.log(map3);
