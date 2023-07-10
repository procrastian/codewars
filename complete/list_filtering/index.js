const array = [1,2,'aasf','1','123',123]


function filter_list(l) {
  let newList = []
  l.filter((el) => {
    if (typeof el === "number") {
      newList.push(el)}
  })
  return newList
}

filter_list(array)