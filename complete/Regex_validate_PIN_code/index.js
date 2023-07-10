function validatePIN (pin) {
  const isDigits = /^[0-9]*$/.test(pin)
  if (!isDigits) {return false}
  if (pin.length !== 4 && pin.length !== 6) {return false}
  return true
}


/* 
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
*/