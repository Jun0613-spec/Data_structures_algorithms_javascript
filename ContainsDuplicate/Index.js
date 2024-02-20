//Time O(N)
//Space O(N)
const containsDuplicate = (nums) => {
  let hash = new Set(nums);

  if (!nums || nums.length === 0) return false;
  if (nums.length !== hash.size) return true;
  return false;
};

const nums = [1, 2, 3, 1];
const nums1 = [1, 2, 3, 4];
const nums2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
