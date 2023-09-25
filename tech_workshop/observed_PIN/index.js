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

  const allPINs = [];
  let newPIN = []
  allPINs.push(observed.toString());

  const digits = observed.toString().split("");
  const possibleDigits = []

  digits.forEach(digit => {
    possibleDigits.push(keypadDigits[Number(digit)])
  });
  console.log(possibleDigits)

  possibleDigits[0].forEach(digit => {
    newPIN = []
    newPIN.push(digit)
    console.log(newPIN)
  }) 
  return allPINs;
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
