function wave(str){
  const stringArray = str.split('')
  const waveArray = []
  for (let i = 0; i< stringArray.length; i++) {
    if (stringArray[i] === ' ') continue
    const waving = stringArray[i].toUpperCase()
    stringArray[i] = waving
    stringArray.splice(i, 1, waving)
    waveArray.push(stringArray.join(''))
    const reset = stringArray[i].toLowerCase()
    stringArray.splice(i, 1, reset)
  };
  return waveArray
}

console.log(wave('two words'))