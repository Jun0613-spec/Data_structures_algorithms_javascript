// Time O(n)
// Space O(1)
const maxSubarray = (nums) => {
  let currentSub = nums[0];
  let maxSub = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSub = Math.max(nums[i], currentSub + nums[i]);
    maxSub = Math.max(currentSub, maxSub);
  }
  return maxSub;
};

const nums = [-2, 3, -1, 4];
const nums1 = [2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [1];
const nums3 = [5, 4, -1, 7, 8];

console.log(maxSubarray(nums));
console.log(maxSubarray(nums1));
console.log(maxSubarray(nums2));
console.log(maxSubarray(nums3));
