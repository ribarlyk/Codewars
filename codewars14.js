function solution(string) {
  let newArr = Array.from(string);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].charCodeAt() >= 65 && newArr[i].charCodeAt() <= 90) {
      newArr.splice(i, 0, " ");
      i++;
    }
  }
  return newArr.join("");
}
//console.log(solution("camelCase"));
console.log(solution("camelCaseTest"));
