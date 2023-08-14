function count(string) {
  let counts = {};

  const lettersArray = string.split("");

  for (const letter of lettersArray) {
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1
  }

  console.log(counts)

  return counts;
}

count("");
