/* 
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
*/
let first;
// console.log(first);
function second(x, y) {
  const sum = x + y;
}

const result = second(3, 91);
// console.log(result);
function add(a, b) {
  const sum = a + b;
  if (b < 10) {
    return;
  }
  return sum;
}

const fourth = add(2, 7);
// console.log(fourth);
function double(a, b) {
  const result = a * 2;
  //   console.log(b);
  return result;
}
double(81);

const fifth = { name: "karim", age: 24, location: "chittagong" };
// console.log(fifth.phone);

const sixth = [54, 12, 41, 3];
// console.log(sixth[4]);

delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
console.log(seventh);

const myObj = { name: "mahmud", profession: null };
