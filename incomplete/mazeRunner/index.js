const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

const key = {
  safe: 0,
  wall: 1,
  entrance: 2,
  exit: 3,
};

let safePath = true;
let finished = false;

function mazeRunner(maze, directions) {
  safePath = true;
  finished = false;
  const entranceCoordinates = findDoor(maze, "entrance");
  const exitCoordinates = findDoor(maze, "exit");
  const result = findPath(entranceCoordinates, exitCoordinates, directions);
  return result;
}

function findDoor(maze, door) {
  let doorValue = 0;
  let coordinates = {
    x: 0,
    y: 0,
  };
  const whichDoor = door;
  switch (whichDoor) {
    case "entrance":
      doorValue = key.entrance;
      break;
    case "exit":
      doorValue = key.exit;
      break;
  }
  for (i = 0; i < maze.length; i++) {
    let mazeLayer = maze[i];
    let foundDoor = false;
    if (mazeLayer.includes(doorValue)) {
      foundDoor = true;
      coordinates.x += mazeLayer.indexOf(doorValue);
    }
    if (foundDoor) {
      coordinates.y += i;
    }
  }
  return coordinates;
}

function findPath(enterAt, exitAt, directions) {
  const finishPos = exitAt;
  let currentPos = enterAt;
  directions.forEach((direction) => {
    if (!safePath) return "Dead";
    if (finished) return "Finish";
    switch (direction) {
      case "N":
        currentPos.y--;
        checkIsSafe(currentPos);
        checkIfFinished(currentPos, finishPos);
        break;
      case "S":
        currentPos.y++;
        checkIsSafe(currentPos);
        checkIfFinished(currentPos, finishPos);
        break;
      case "E":
        currentPos.x++;
        checkIsSafe(currentPos);
        checkIfFinished(currentPos, finishPos);
        break;
      case "W":
        currentPos.x--;
        checkIsSafe(currentPos);
        checkIfFinished(currentPos, finishPos);
        break;
    }
    // console.log("you are at:", currentPos);
  });
  if (!safePath) return "Dead";
  if (finished) return "Finish";
  return "Lost";
}

function checkIsSafe(currentPos) {
  const currentRow = maze[currentPos.y];
  if (!currentRow) {
    safePath = !safePath;
    return safePath;
  }
  if (maze[currentPos.y][currentPos.x] === key.wall) {
    safePath = !safePath;
    return safePath;
  }
  if (
    currentPos.x < 0 ||
    currentPos.y < 0 ||
    currentPos.x > maze.length ||
    currentPos.y > maze.length
  ) {
    safePath = !safePath;
    return safePath;
  }
}

function checkIfFinished(currentPos, finishPos) {
  if (currentPos.x === finishPos.x && currentPos.y === finishPos.y) {
    finished = !finished;
    return finished;
  }
}

console.log("0", mazeRunner(maze, []), "Expected Lost");

console.log(
  "1",
  mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]),
  "Expected Finish"
);
console.log(
  "2",
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "E",
    "E",
    "N",
    "N",
    "E",
  ]),
  "Expected Finish"
);
console.log(
  "3",
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "E",
    "E",
    "E",
    "W",
    "W",
  ]),
  "Expected Finish"
);

console.log("4", mazeRunner(maze, ["N", "N", "N", "W", "W"]), "Expected Dead");
console.log(
  "5",
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
  ]),
  "Expected Dead"
);

console.log("6", mazeRunner(maze, ["N", "E", "E", "E", "E"]), "Expected Lost");
