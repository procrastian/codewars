const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';

class VigenèreCipher {
  constructor(key, abc) {
    this.key = key;
    this.abc = abc
  }

  encode(message) {
    console.log(message)
    console.log(this.key)
  }

  decode(message) {
    console.log(message)
    console.log(this.abc)
  }

}

const c = new VigenèreCipher(key, alphabet)

c.encode('message')
c.decode('message')