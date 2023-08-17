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
    default:
      break;
  }
  for (i = 0; i < maze.length; i++) {
    let mazeLayer = maze[i];
    let foundDoor = false;
    if (mazeLayer.includes(doorValue)) {
      foundDoor = true;
      coordinates.x = mazeLayer.indexOf(doorValue);
    }
    if (foundDoor) {
      coordinates.y = i;
    }
  }
  return coordinates;
}

console.log(mazeRunner(maze, directions));
