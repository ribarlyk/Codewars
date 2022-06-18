function incrementString(strng) {
  let splitString = strng.split("");
  let numbers = [];
  let letters = [];

  for (let i = 0; i < splitString.length; i++) {
    Number(splitString[i])
      ? numbers.push(splitString[i])
      : letters.push(splitString[i]);
  }

  if (
    numbers[numbers.length - 1] === "9" &&
    letters[letters.length - 1] === "0"
  ) {
    letters.pop();
  }
  if (
    letters[letters.length - 1] === "0" &&
    numbers[numbers.length - 1] === undefined
  ) {
    letters.pop();
  }
  numbers = Number(numbers.join(""));
  numbers++;
  letters = letters.join("");
  return letters.concat(numbers);
}
console.log(incrementString("foo000"));
