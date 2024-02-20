const fibonacciRecursive = (number) => {
  if (number < 2) return number;

  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
};

const fibonacciIterative = (number) => {
  let array = [0, 1];
  for (let i = 2; i < number + 1; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array[number];
};

console.log(fibonacciIterative(10));
console.log(fibonacciRecursive(10));
