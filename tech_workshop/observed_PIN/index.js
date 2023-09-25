const keypadDigits = [
  [0, 8],
  [1, 2, 4],
  [2, 1, 3, 5],
  [3, 2, 6],
  [4, 1, 5, 7],
  [5, 2, 4, 6, 8],
  [6, 3, 5, 9],
  [7, 4, 8],
  [8, 5, 7, 9, 0],
  [9, 6, 8],
];

function getPINs(observed) {
  //convert observed number to array of digits as strings
  const digits = observed.toString().split("");

  // store the possibilities for each digit of the PIN
  const possibleDigits = [];
  digits.forEach((digit) => {
    possibleDigits.push(keypadDigits[Number(digit)]);
  });

  return getCombinations(possibleDigits);
}

function getCombinations(array, previousValue) {
  previousValue = previousValue || "";
  if (!array.length) {
    return previousValue;
  }
  let result = array[0].reduce(function (result, value) {
    return result.concat(
      getCombinations(array.slice(1), previousValue + value)
    );
  }, []);
  return result;
}

console.log(getPINs(1357));

/*
button - possible digits
0      - 0 8
1      - 1 2 4
2      - 2 1 3 5
3      - 3 2 6
4      - 4 1 5 7
5      - 5 2 4 6 8
6      - 6 3 5 9
7      - 7 4 8
8      - 8 5 7 9 0
9      - 9 6 8
*/
