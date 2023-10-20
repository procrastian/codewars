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

    //repeat the key to match length of split message
    const splitKey = this.splitString(this.key);
    console.log(splitKey, splitKey.length);

    function repeat(arr, n) {
      const newArr = [].concat(...Array(n).fill(arr));
      return newArr
    }

    const repeatNum = Math.ceil(splitMessage.length/splitKey.length)
    console.log(repeatNum)

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
// c.decode('a test message')
// c.splitABC(alphabet)

// caesar - a = 0 z = 25
// if num > 26 then -26 to give num

// vig - repeat the key for all chars in message
// count num of chars in message
