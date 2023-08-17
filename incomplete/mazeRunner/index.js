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

function mazeRunner(maze, directions) {
  const entranceCoordinates = findDoor(maze, "entrance");
  console.log("ENTRANCE", entranceCoordinates);
  const exitCoordinates = findDoor(maze, "exit");
  console.log("EXIT", exitCoordinates);
  findPath(entranceCoordinates, exitCoordinates, directions);
}

function findDoor(maze, door) {
  let doorValue = 0;
  let coordinates = {
    x: 1,
    y: 1,
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
  directions.forEach((dir) => {
    switch (dir) {
      case "N":
        currentPos.y--;
        break;
      case "S":
        currentPos.y++;
        break;
      case "E":
        currentPos.x++;
        break;
      case "W":
        currentPos.x--;
        break;
    }
    console.log('you are at:', currentPos)
  });
  if (currentPos.x === finishPos.x && currentPos.y === finishPos.y) {
    return console.log('Finish')
  }
}

console.log(mazeRunner(maze, directions));
