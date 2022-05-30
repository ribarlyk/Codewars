var uniqueInOrder = function (iterable) {
  let iterableArray = [];
  if (typeof iterable == "string") {
    iterableArray = iterable.split("");
  } else {
    iterableArray = iterable;
  }
  let result = [];
  let startingChar = iterableArray[0];
  console.log(startingChar);
  if (startingChar != undefined) {
    result.push(startingChar);
  }
  for (let i = 1; i < iterableArray.length; i++) {
    let currentChar = iterableArray[i];
    if (startingChar != currentChar) {
      result.push(currentChar);
    }
    startingChar = currentChar;
  }
  return result.length >= 0 ? result : [];
};
console.log(uniqueInOrder("ABCAGSDJKASHDHIASASAAAAAKJDHA"));
console.log(uniqueInOrder([1, 2, 3, 1, 2, 22, 2, 2, 3]));
console.log(uniqueInOrder([]));

//const uniqueInOrder = iterable => [...iterable].filter((el, index, arr) => el !== arr[index-1]);