const standardisedScores = (scoresArray, lowThreshold, highThreshold) => {
  const resultArray = [];
  let checkWithinScoreThresholds = true;
  for (let score of scoresArray) {
    if (score < lowThreshold) {
      checkWithinScoreThresholds = false;
      resultArray.push(lowThreshold);
      continue;
    }
    if (score > highThreshold) {
      checkWithinScoreThresholds = false;
      resultArray.push(highThreshold);
      continue;
    }
    resultArray.push(score);
  }
  if (checkWithinScoreThresholds) {
    throw new Error("there are no values outside the thresholds");
  }
  return resultArray;
};

console.log(standardisedScores([1, 3, 5, 7, 8], 2, 8));

// lowThreshold < all values < highThreshold
// throw an error

// I’m running a competition!

// I have invited 5 judges to score snippets of code on a scale of 1-10. So each judge is going to give me a score.

// But I know that some of the judges are biased giving really low or really high scores, so I want to standardize the scores. The way I’m going to standardise the scores is by using a low threshold and a high threshold.

// For example, if my 5 judges give me scores [1,3,5,7,9] and the low threshold is 2, and the high threshold is 8, then the expected outcome is the scores [2,3,5,7,8] because the 1 gets rounded up to the 2 and the 9 gets rounded down to the 8.

// So with the inputs of scores =  [1,3,5,7,9], low threshold = 2, high threshold 8, the expected outcome is [2,3,5,7,8]
