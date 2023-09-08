function firstNonRepeatingLetter(s) {
  const letters = s.split("");
  let letterPosition = 0;
  let fnrLetter = letters[0];
  for (let i = 1; i < letters.length; i++) {
    if (letters[i] === fnrLetter) {
      letterPosition++
      fnrLetter = letters[letterPosition]
    }
  }
  return fnrLetter;
}

console.log(firstNonRepeatingLetter("moonmen"));
