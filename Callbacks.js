// A callback is a function that paased into another function as an argument
// High order function in javascript are funtions thatoprates one another 
// funtion either by taking them as an argument or by returning them. 

const radiusArray = [3, 1, 2, 4];

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

const calculateCallback = (radiusArray, logic) => {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(logic(radiusArray[i]));
  }
  return output;
};

console.log(calculateCallback(radiusArray, area));
console.log(calculateCallback(radiusArray, circumference));
console.log(calculateCallback(radiusArray, diameter));

// //area
// const calculateArea = (radiusArray) => {
//   const output = [];
//   for (let i = 0; i < radiusArray.length; i++) {
//     output.push(area(radiusArray[i]));
//   }
//   return output;
// };

// console.log(calculateArea(radiusArray));

// //circumference
// const calculateCircumference = (radiusArray) => {
//   const output = [];
//   for (let i = 0; i < radiusArray.length; i++) {
//     output.push(circumference(radiusArray[i]));
//   }
//   return output;
// };

// console.log(calculateCircumference(radiusArray));

// //diameter
// const calculateDiameter = (radiusArray) => {
//   const output = [];
//   for (let i = 0; i < radiusArray.length; i++) {
//     output.push(diameter(radiusArray[i]));
//   }
//   return output;
// };

// console.log(calculateDiameter(radiusArray));