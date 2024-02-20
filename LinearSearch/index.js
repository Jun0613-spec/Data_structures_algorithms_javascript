//Time O(m)
const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return nums[i];
    }
  }
  return;
};

console.log(linearSearch([1, 3, 6, 7, 12, 15, 16], 7));
