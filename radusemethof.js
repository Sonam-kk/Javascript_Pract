//sum of array elements
const arr1 = [5, 1, 30, 2, 6, 21, 18];
const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(sum(arr1));

//reduce method
const outputReduce = arr.reduce((acc, curr) => acc + curr, 0);
console.log(outputReduce);