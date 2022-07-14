var searchInsert = function (nums, target) {
  ifNot = null;
  nums.filter((el, i) => {
    if (el === target) {
      ifNot = i;
    } else {
      nums.push(target);
    }
  });
  nums.sort((a, b) => a - b);
  if (ifNot === null) {
    return nums.indexOf(target);
  }
  return ifNot;
};
searchInsert([1, 3, 4, 5], 2);
