function sumPairs(ints, s) {
  const allPairs = [];
  let foundPair = [];
  for (i = 0; i < ints.length; i++) {
    for (j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        foundPair = [];
        foundPair.push(ints[i]);
        foundPair.push(ints[j]);
        foundPair.push(j)
        allPairs.push(foundPair);
      }
    }
  }
  if (allPairs.length === 0) return undefined
  let currentPair = allPairs[0];
  for (i = 0; i < allPairs.length; i++) {
    if (allPairs[i][2] < currentPair[2]) {
      currentPair = allPairs[i]
    }
  }
  solutionPair = [currentPair[0], currentPair[1]]
  return solutionPair
}

console.log(sumPairs([10, 5, 2, 3, 7, 5],         10));
