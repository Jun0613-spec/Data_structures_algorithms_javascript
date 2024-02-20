const numbers = [1, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//O(n^2)
function selectionSort(array) {
  //Code here
  for (let i = 0; i < array.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let temp = array[i];
    array[i] = array[minimumIndex];
    array[minimumIndex] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
