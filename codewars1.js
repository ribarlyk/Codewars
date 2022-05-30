function filterList(l) {
  arr = [];
  l.forEach((element) => {
    if (typeof element === "number") {
      arr.push(element);
    }
  });
  console.log(arr);
}
filterList(["a", 1, 2, 3]);
