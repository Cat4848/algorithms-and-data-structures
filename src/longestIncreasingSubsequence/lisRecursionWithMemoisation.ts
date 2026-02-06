const lengthOfLIS = (nums: number[]): number => {
  const len = nums.length;
  const memo = Array(len).fill(-1);
  let max = 1;
  for (let i = 1; i < len; i++) {
    max = Math.max(max, lis(nums, memo, i));
  }
  return max;
};

const lis = (nums: number[], memo: number[], index: number): number => {
  if (index === 0) return 1;
  if (memo[index] !== -1) return memo[index];

  let max = 1;
  for (let prev = 0; prev < index; prev++) {
    if (nums[prev] < nums[index]) {
      max = Math.max(max, lis(nums, memo, prev) + 1);
    }
  }
  memo[index] = max;
  return memo[index];
};
