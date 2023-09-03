// function isPangram(string) {
//   const alphabet = {
//     a: false,
//     b: false,
//     c: false,
//     d: false,
//     e: false,
//     f: false,
//     g: false,
//     h: false,
//     i: false,
//     j: false,
//     k: false,
//     l: false,
//     m: false,
//     n: false,
//     o: false,
//     p: false,
//     q: false,
//     r: false,
//     s: false,
//     t: false,
//     u: false,
//     v: false,
//     w: false,
//     x: false,
//     y: false,
//     z: false,
//   };
//   letters = string.split("");
//   letters.forEach((letter) => {
//     console.log(letter)
//     if (alphabet.letter === letter) {
//       console.log('found letter:', letter)
//       alphabet.letter = true;
//     }
//   });
//   checkAllLetters = Object.values(alphabet)
//   console.log(checkAllLetters)
//   if (checkAllLetters.includes(false)) return false;
//   return true;
// }

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const alphabetLength = alphabetArray.length;
  const lettersArray = string.toLowerCase().split("");
  const sentenceArray = lettersArray.filter((letter) => letter !== " ");
  const sentenceLength = sentenceArray.length;
  for (let i = 0; i < sentenceLength; i++) {
    let letter = sentenceArray[i];
    for (let j = 0; j < alphabetLength; j++) {
      if (alphabetArray[j] === letter) {
        alphabetArray.splice(j, 1);
      }
    }
  }
  console.log(alphabetArray)
  if (alphabetArray.length === 0) return true;
  return false;
}
// codewars top answer
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }

console.log(isPangram("Cwm fjord bank glyphs vext quiz"));
