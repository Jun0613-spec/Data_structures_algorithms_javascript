let calculations = 0;

//O(n^2)
const fibonacci = (n) => {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// console.log(fibonacci(7));

const fibonacciMaster = () => {
  //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

const fibonacciMaster2 = (n) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[n];
};

const fasterFib = fibonacciMaster();

// console.log("DP", fasterFib(10));
console.log("DP2", fibonacciMaster2(-1));
console.log("DP2", fibonacciMaster2(0));
console.log("DP2", fibonacciMaster2(1));
console.log("DP2", fibonacciMaster2(2));
console.log("DP2", fibonacciMaster2(3));
console.log("DP2", fibonacciMaster2(4));
console.log("DP2", fibonacciMaster2(5));
console.log("DP2", fibonacciMaster2(6));
console.log("DP2", fibonacciMaster2(7));
console.log("DP2", fibonacciMaster2(8));
console.log("DP2", fibonacciMaster2(9));
console.log("DP2", fibonacciMaster2(10));
console.log("DP2", fibonacciMaster2(11));
console.log("DP2", fibonacciMaster2(12));

console.log("we did " + calculations + " calculations");
