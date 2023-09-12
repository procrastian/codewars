function checkPunctuation(str) {
  return /^[a-zA-Z]*$/.test(str);
}

function pigIt(str) {
  let solutionArray = [];
  const wordsArray = str.split(" ");
  for (i = 0; i < wordsArray.length; i++) {
    if (!checkPunctuation(wordsArray[i])) {
      solutionArray.push(wordsArray[i]);
    } else {
      const lettersArray = wordsArray[i].split("");
      lettersArray.push(lettersArray[0]);
      lettersArray.splice(0, 1);
      let word = `${lettersArray.join("")}ay`;
      solutionArray.push(word);
    }
  }
  let solutionSentence = solutionArray.join(" ");
  return solutionSentence;
}

console.log(pigIt("Hello world !"));

/*
top codewars result
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
*/