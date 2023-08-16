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
  start: 2,
  exit: 3,
};

function mazeRunner(maze, directions) {
  findStart(maze)
}

function findStart(maze) {
  let startCoordinates = {
    x: 0,
    y: 0
  }
  for (i = 0; i < maze.length; i++) {
    let mazeLayer = maze[i]
    let foundStart = false
    if (mazeLayer.includes(key.start)) {
      foundStart = true
      startCoordinates.x = mazeLayer.indexOf(key.start)
    }
    if (foundStart) {
      startCoordinates.y = i
    }
  }
  console.log('startCoordinates', startCoordinates)
  return startCoordinates
}

console.log(mazeRunner(maze, directions));
