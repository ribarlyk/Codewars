function cakes(recipe, available) {
  let obj = {};
  for (let key in recipe) {
    if (available.hasOwnProperty(key)) {
      if (!obj.hasOwnProperty(key))
        obj[key] = Math.floor(available[key] / recipe[key]);
    } else {
      obj[key] += Math.floor(available[key] / recipe[key]);
    }
  }
  let kvp = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  if (Number.isInteger(obj[kvp[0]]) == false) {
    obj[kvp[0]] = 0;
  }
  return obj[kvp[0]];
}
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
