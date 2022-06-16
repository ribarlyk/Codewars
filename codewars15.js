function alphanumeric(string) {
  let reg = new RegExp(/^([a-zA-Z0-9]+)$/, "g");
  return reg.test(string);
}
console.log(alphanumeric("hui"));
console.log(alphanumeric("hui*@#$&(@#*) "));
