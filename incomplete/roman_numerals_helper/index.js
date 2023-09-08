class RomanNumerals {
  constructor(value) {
    this.value = value
  }

  static typeOfValue(value) {
    if (typeof(value) === Number){
      this.toRoman(value)
    } 
    if (typeof(value) === String){
      this.fromRoman(value)
    }
    
  }

  static toRoman(num) {
    return 'IV';
  }

  static fromRoman(str) {
    return 4;
  }
}

const firstNumber = new RomanNumerals(4)
console.log(firstNumber)