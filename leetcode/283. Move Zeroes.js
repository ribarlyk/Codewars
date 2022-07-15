var moveZeroes = function (nums) {
  const length = nums.length;
  nums = nums.filter((n) => n != 0);
  for (let i = 0; i <= length - nums.length; i++) {
    nums.push(0);
  }
  return nums;
};

console.log(moveZeroes(
    [0,1,0,3,12]));
