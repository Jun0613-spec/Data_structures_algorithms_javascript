//Insertion sort has a fast best-case running time and is a good sorting algorithm to use if the input list is already mostly sorted. For larger or more unordered lists, an algorithm with a faster worst and average-case running time, such as mergesort, would be a better choice.

const numbers = [99, 44, -2, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Time O(n^2)
//Space O(1)
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
  return array;
};

insertionSort(numbers);
console.log(numbers);
