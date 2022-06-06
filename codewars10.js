function count(string) {
  let obj = {};
  string.split("").forEach((element) => {
    obj[element] ? obj[element]++ : (obj[element] = 1);
  });
  return obj;
}
console.log(count(""));
