/* 
Data types
primitive types
1. number
2. string
3. boolean
4. undefined
4. null
7. symbol

non-primitive types
6. object
*/

let a = "hello";
let b = a;
// console.log(a, b);
a = "gello";
// console.log(a, b);

const x = { job: "web developer" };
const y = x;
console.log(x, y);
// x.job = "front end develper";
y.job = "front end develper";
console.log(x, y);
