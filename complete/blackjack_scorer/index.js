function scoreHand(cards) {
  let score = 0;
  cards.forEach((card) => {
    switch (card) {
      case "A":
        score += 11;
        break;
      case "J":
        score += 10;
        break;
      case "Q":
        score += 10;
        break;
      case "K":
        score += 10;
        break;
      case "2":
        score += 2;
        break;
      case "3":
        score += 3;
        break;
      case "4":
        score += 4;
        break;
      case "5":
        score += 5;
        break;
      case "6":
        score += 6;
        break;
      case "7":
        score += 7;
        break;
      case "8":
        score += 8;
        break;
      case "9":
        score += 9;
        break;
      case "10":
        score += 10;
        break;
      default:
        break;
    }
  });

  cards.forEach((element) => {
    if (score > 21 && element === "A") {
      score -= 10;
    }
  });

  return score;
}

console.log(scoreHand(["A", "2", "A", "9", "9"]));
