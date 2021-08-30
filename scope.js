const favNum = 27;

function add(first, second) {
  const result = first + second;
  console.log(mood); // hoisting
  if (result > 9) {
    var mood = "happy";
    mood = "cranky";
  }
  console.log(mood);
  return result;
}
const sum = add(11, 35);

for (var i = 0; i < 10; i++) {}
// console.log(i);
