// #1
// const alternateNumsInArray = (array) => {
//   let countUp = 0;
//   let countDown = array.length - 1;

//   for (num of array) {
//     console.log(array[countUp]);
//     console.log(array[countDown]);
//     countUp++;
//     countDown--;
//     if (countUp === array.length / 2) return;
//   }
// };

// alternateNumsInArray([1, 2, 3, 4]);

// #2
// const arraySort = (array) => {
//   let divsibleByTwo = []
//   let divisibleByThreeRemoved = []
//   for (num of array) {
//     if (num % 2 === 0) {
//       divsibleByTwo.push(num)
//     }
//     if (num % 3 !== 0) {
//       // array.splice(index, 1)
//       divisibleByThreeRemoved.push(num)
//     }
//   }
//   console.log(divsibleByTwo)
//   console.log(divisibleByThreeRemoved)
// }

// arraySort([1, 4, 8, 9, 12])

// #3
const objectToString = (object) => {
  const resArray = [];
  let key;
  let value;

  const objectKeys = Object.keys(object);
  const objectValues = Object.values(object);

  for (let i = 0; i < objectKeys.length; i++) {
    key = objectKeys[i];
    value = objectValues[i];
    if (key === value) {
      delete object[key];
      resArray.push(`Key is: <${key}>; value is: <${value}>`);
    }
  }
  console.log(object);
  console.log(resArray);
};

objectToString({ aa: 1, bb: "bb" });
