let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetArray = [];

const splitString = (string) => {
  return string.split("");
};

function alphabetPosition(text) {
  alphabetArray = splitString(alphabet);
  let messaageLetters = splitString(text);
  let messagePositions = [];
  messaageLetters.forEach((element) => {
    messagePositions.push(alphabetArray.findIndex((el) => element === el) + 1);
  });

  return messagePositions.join(" ");
}

alphabetPosition("and");
