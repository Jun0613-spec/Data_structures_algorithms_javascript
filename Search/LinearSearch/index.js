const numbers = [1, 4, 6, 7, 8, 12, 56, 74, 85, 98, 123, 152, 346, 477];

//O(n)
const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return null;
};

console.log(linearSearch(numbers, 4));
