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
  findStart(maze)
}

function findDoor(maze, door) {
  let doorValue = 0
  switch (key) {
    case entrance:
      doorValue = key.entrance
      break;
    case exit:
      doorValue = key.exit
    default:
      break;
  }
  if (door === 'entrance') {
    doorValue = key.entrance
  }
  if (door === 'exit') {
    doorValue === key.exit
  }
  let coordinates = {
    x: 0,
    y: 0
  }
  for (i = 0; i < maze.length; i++) {
    let mazeLayer = maze[i]
    let foundStart = false
    if (mazeLayer.includes(doorValue)) {
      foundStart = true
      coordinates.x = mazeLayer.indexOf(doorValue)
    }
    if (foundStart) {
      coordinates.y = i
    }
  }
  console.log('coordinates', coordinates)
  return coordinates
}

console.log(mazeRunner(maze, directions));
