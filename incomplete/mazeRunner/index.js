const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

const directions = ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"];

const key = {
  safe: 0,
  wall: 1,
  entrance: 2,
  exit: 3,
};

let safePath = true;

function mazeRunner(maze, directions) {
  const entranceCoordinates = findDoor(maze, "entrance");
  console.log("ENTRANCE", entranceCoordinates);
  const exitCoordinates = findDoor(maze, "exit");
  console.log("EXIT", exitCoordinates);
  const result = findPath(entranceCoordinates, exitCoordinates, directions);
  console.log("------");
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
  console.log("finding path from", currentPos, "to", finishPos);
  console.log("------");
  directions.forEach((direction) => {
    if (!safePath) return "Dead";
    switch (direction) {
      case "N":
        currentPos.y--;
        checkIsSafe(currentPos);
        break;
      case "S":
        currentPos.y++;
        checkIsSafe(currentPosh);
        break;
      case "E":
        currentPos.x++;
        checkIsSafe(currentPos);
        break;
      case "W":
        currentPos.x--;
        checkIsSafe(currentPos);
        break;
    }
    console.log("you are at:", currentPos);
  });
  if (!safePath) return "Dead";
  if (currentPos.x === finishPos.x && currentPos.y === finishPos.y) {
    return "Finish";
  }
  return "Lost";
}

function checkIsSafe(currentPos) {
  if (
    currentPos.x < 0 ||
    currentPos.y < 0 ||
    currentPos.x > maze.length ||
    currentPos.y > maze.length
  ) {
    safePath = !safePath;
    return safePath;
  }
  if (maze[currentPos.y][currentPos.x] === key.wall) {
    safePath = !safePath;
    return safePath;
  }
}

console.log(mazeRunner(maze, directions));
