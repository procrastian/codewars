function cakes(recipe, available) {
  let numCakes = [];
  Object.keys(recipe).forEach((ingredient) => {
    numCakes.push(Math.floor(available[ingredient] / recipe[ingredient]));
  });
  if (numCakes.includes(NaN)) {
    return 0;
  }
  return Math.min(...numCakes);
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);
