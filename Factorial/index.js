//Write two functions that finds the factorial of any number. One should use recursive, the other should jest use a for loop

const findFactorialRecursive = (number) => {
  if (number === 2) return 2;

  return number * findFactorialRecursive(number - 1);
};

const findFactorialIterative = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
};

console.log(findFactorialRecursive(12));
console.log(findFactorialIterative(12));
