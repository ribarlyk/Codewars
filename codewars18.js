function moveZeros(arr) {
  let result = arr.filter((el) => el !== 0);
  let dif = arr.length - result.length;

  for (let i = 0; i < dif; i++) {
    result.push(0);
  }
  return result;
}
moveZeros([1,2,0,1,0,1,0,3,0,1]);
