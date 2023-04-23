/* shape-area.js */
//const PI = Math.PI;
let radius = 4;
let side = 6;
// Define and export circleArea() and squareArea() below
function circleArea(radiusLength){
  return Math.floor(PI * radius * radius)
};

function squareArea(sideLength) {
  return side * side
};
console.log(circleArea());
console.log(squareArea());

module.exports.circleArea = circleArea;

// Above is my first attempt to try and use node modules between multiple files.

// Below this code is the solution.

/* shape-area.js */
const PI = Math.PI;

function circleArea(radiusLength) {
  return PI * r * r;
};
function squareArea(sideLength) {
  return side * side
};

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea