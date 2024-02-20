const numbers = [1, 4, 6, 7, 8, 12, 56, 74, 85, 98, 123, 152, 346, 477];

//O(n log n)
//space O(1)
const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + right / 2);
    //let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
};

console.log(binarySearch(numbers, 56));
