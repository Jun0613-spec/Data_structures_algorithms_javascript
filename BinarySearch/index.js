const array = [1, 3, 4, 7, 8, 12, 16, 18, 22, 23, 26, 47];

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
};

console.log(binarySearch(array, 7));
