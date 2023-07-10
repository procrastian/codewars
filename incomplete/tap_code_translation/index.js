const polybius = [
  [1, "A", "B", "C", "D", "E"],
  [2, "F", "G", "H", "I", "J"],
  [3, "L", "M", "N", "O", "P"],
  [4, "Q", "R", "S", "T", "U"],
  [5, "V", "W", "X", "Y", "Z"],
];

let numsArray = []
let message = []

function textToArray(text) {
  const chars = text.toUpperCase().split("");
  return chars
}

function searchTable(letter) {
  if (letter === "K") {letter = "C"}
  // console.log(letter)
  polybius.forEach((row) => {
    searchRow(row, letter)
  })
}

function searchRow(row, letter) {
  row.find((element) => {
    if (element === letter){
      numsArray.push(row[0], row.indexOf(letter))
    }
  })
}

function convertNumToDot(num) {
  const dot = '.' 
  const dots = `${dot.repeat(num)}`
  message.push(dots)
}

function tapCodeTranslation(text) {
  let answer = ""
  const textUpperCaseArray = textToArray(text)
  textUpperCaseArray.forEach(element => {
    searchTable(element)
  });
  console.log(numsArray)
  numsArray.forEach((num) => convertNumToDot(num))
  console.log(message)
  const dots = message.toString()
  console.log(dots)
  answer = dots.replaceAll(',' , ' ')
  console.log(answer)
  return answer;
}


tapCodeTranslation("hello");

