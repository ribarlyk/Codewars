function divisors(integer) {
  let arr = [];
  for (let i = 2; i <= integer; i++) {
    if (integer % i == 0 && integer != i) {
      arr.push(i);
    }
    if (i == integer && arr.length == 0) {
      return `${integer} is prime`;
    }
  }
  return arr;
}
console.log(divisors(13));
