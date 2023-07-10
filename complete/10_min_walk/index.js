const walk1 = ["n", "s", "n", "s", "n", "s", "n", "s", "n"];
const walk2 = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"];
const walk3 = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];

function isValidWalk(walk) {
  //insert brilliant code here
  let x = 0;
  let y = 0;

  if (walk.length !== 10) {
    console.log("invalid walk length");
    return false;
  }

  walk.forEach((element) => {
    if (element === "n") {
      y += 1;
    } else if (element === "s") {
      y -= 1;
    } else if (element === "e") {
      x += 1;
    } else if (element === "w") {
      x -= 1;
    }
  });

  console.log("x, y", x, y);

  if (x === 0 && y === 0) {
    console.log("returns to start");
    return true;
  } else {
    console.log("does not return to start");
    return false;
  }
}

isValidWalk(walk1);
isValidWalk(walk2);
isValidWalk(walk3);

// y dir = n & s
// x dir = e & w

// n = +1 y
// s = -1 y
// e = +1 x
// w = -1 x

// count in array - each of n s e w
// both x and y must = 0 after all steps
