//Time O(n)
const firstRecurringCharacter = (array) => {
  let hash = new Map();

  for (let i = 0; i < array.length; i++) {
    if (hash.has(array[i])) {
      return array[i];
    }
    hash.set(array[i], i);
  }

  return null;
};

const array = [2, 3, 3, 1, 2, 4, 5, 6, 7, 8, 9, 24];

console.log(firstRecurringCharacter(array));
