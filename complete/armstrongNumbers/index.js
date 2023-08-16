function narcissistic(value) {
  const digits = value.toString().split('')
  const digitsArray = digits.map(Number)
  let count = 0
  const basePower = digitsArray.length
  digitsArray.forEach(element => {
    count += element ** basePower
  });
  if (count === value) return true
  return false
}

console.log(narcissistic(1652))