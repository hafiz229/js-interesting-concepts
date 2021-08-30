function welcomeMessage(name, greetHandler) {
  greetHandler(name);
}
// const name = ["Sharlock", "Tomy", "Jerry"];
// const myObj = { name: "Tom Jerry", age: 24 };
function greetMorning(name) {
  console.log("Good Morning!!", name);
}
function greetAfternoon(name) {
  console.log("Good Afternoon!!", name);
}
welcomeMessage("Tom Jerry", greetMorning);
welcomeMessage("Sakib Jerry", greetAfternoon);
