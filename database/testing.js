const Climb = require("./example.js");

const newClimb = new Climb("Sparky", 4, "vert", "10/15/23", "This was my very first dyno");

console.log(newClimb.name);
console.log(newClimb.grade);
console.log(newClimb.style);
console.log(newClimb.date);
console.log(newClimb.description);