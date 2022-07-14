var search = function (nums, target) {
  let indexOfTarget = -1;
  nums.filter((el, i) => {
    if (el === target) {
      indexOfTarget = i;
    }
  });
  return indexOfTarget
};

search([-1, 0, 3, 5, 9, 12], 19);
