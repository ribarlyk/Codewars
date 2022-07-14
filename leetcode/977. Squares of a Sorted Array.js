var sortedSquares = function(nums) {
    return  nums.map(x=> x*x).sort((a,b)=>a-b)
  };