//Merge sort performs well when sorting large lists, but its operation time is slower than other sorting solutions when used on smaller lists. Another disadvantage of merge sort is that it will execute the operational steps even if the initial list is already sorted.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//O(log N)
const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  console.log("left:", left);
  console.log("right:", right);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const answer = mergeSort(numbers);
console.log(answer);
