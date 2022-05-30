function createPhoneNumber(numbers) {
  let result = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    result = result.replace("x", numbers[i]);
  }
  return result;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
