let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetArray = [];

const splitString = (string) => {
  const lowerString = string.toLowerCase()
  return lowerString.split("");
};

function alphabetPosition(text) {
  alphabetArray = splitString(alphabet);
  let onlyLetters = text.replace(/[^a-z]/gi, '')
  let messaageLetters = splitString(onlyLetters);
  let messagePositions = [];
  messaageLetters.forEach((element) => {
    messagePositions.push(alphabetArray.findIndex((el) => element === el) + 1);
  });

  return messagePositions.join(" ");
}

console.log(alphabetPosition("and"));
