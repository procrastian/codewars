function moveZeros(arr) {
  const newArr = []
  const zeroArr = []
   arr.map((item) => {
    if (item !== 0) {
      newArr.push(item)
    }
    if (item === 0) {
      zeroArr.push(item)
    }
  })
  return [...newArr, ...zeroArr]
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))