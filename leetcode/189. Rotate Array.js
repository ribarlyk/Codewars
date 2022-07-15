var rotate = function (nums, k) {
  let index = nums.length - k;
  if (nums.length > k) {
    let deleted = nums.splice(index, k);
    nums.unshift(...deleted);
    
  } else {
    for (let i = 0; i < k; i++) {
      let current = nums.pop();
      nums.unshift(current);
    }
  }
};
console.log(rotate([1, 2], 5));
