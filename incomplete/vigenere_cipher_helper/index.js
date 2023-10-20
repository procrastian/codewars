const alphabet = "abcdefghijklmnopqrstuvwxyz";
const key = "passw";

class VigenèreCipher {
  constructor(key, abc) {
    this.key = key;
    this.abc = abc;
  }

  splitString(str) {
    return str.split("");
  }

  encode(message) {
    console.log(message);
    console.log(this.key);

    //split the message into an array of characters
    const splitMessage = this.splitString(message);
    console.log(splitMessage, splitMessage.length);

    //split the key into an array of characters
    const splitKey = this.splitString(this.key);
    console.log(splitKey, splitKey.length);
    
    //create new array that is repeated n times
    function repeat(arr, n) {
      const newArr = [].concat(...Array(n).fill(arr));
      return newArr
    }
    
    //calculate n for number of repeats required
    const repeatNum = Math.ceil(splitMessage.length/splitKey.length)
    console.log(repeatNum)
    
    //repeat the key n times, and remove any extra chars to match length of split message
    const fullKey = repeat(splitKey, repeatNum);
    if (fullKey.length > splitMessage.length) {
      const elemsToDelete = fullKey.length - splitMessage.length
      console.log(elemsToDelete)
      fullKey.splice(splitMessage.length - elemsToDelete, elemsToDelete)
    }

    console.log(fullKey, fullKey.length);
  }

  // decode(message) {
  //   console.log(message)
  //   console.log(this.abc)
  // }
}

const c = new VigenèreCipher(key, alphabet);

c.encode("a test message that has more letters");
