const alphabet = "abcdefghijklmnopqrstuvwxyz";
const key = "password";

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

    const fullKey = splitMessage.map((char) => {
      for (let i = 0; i < splitMessage.length; i++) {
        if (i > splitKey.length) {
          i = i - splitKey.length;
        }
        char = splitKey[i];
      }
    });
    console.log(fullKey, fullKey.length);
  }

  // decode(message) {
  //   console.log(message)
  //   console.log(this.abc)
  // }
}

const c = new VigenèreCipher(key, alphabet);

c.encode("a test message");
// c.decode('a test message')
// c.splitABC(alphabet)

// caesar - a = 0 z = 25
// if num > 26 then -26 to give num

// vig - repeat the key for all chars in message
// count num of chars in message
