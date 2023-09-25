function formatDuration(second) {
  // check +ve int
  if (second < 0) return "please provide a positive second value";
  // if 0 return now
  if (second === 0) return "now";

  let time = {
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };

  // check mins
  if (second >= 60) {
    time.minute = Math.floor(second / 60);
  }
  // check hour
  if (time.minute >= 60) {
    time.hour = Math.floor(time.minute / 60);
  }
  // check day
  if (time.hour >= 24) {
    time.day = Math.floor(time.hour / 24);
  }
  // check year
  if (time.day >= 365) {
    time.year = Math.floor(time.day / 365);
  }

  // set secs
  time.second = second % 60;
  // set mins
  time.minute = time.minute % 60;
  // set hour
  time.hour = time.hour % 24;
  // set day
  time.day = time.day % 365;

  console.log(time);
  const seperator = ", ";
  const finalSeperator = "and ";
  let answerArray = [];

  Object.keys(time).forEach((unit) => {
    if (time[unit] === 1) {
      answerArray.push(`1 ${unit}`);
    }
    if (time[unit] > 1) {
      answerArray.push(`${time[unit]} ${unit}s`);
    }
  });

  let answerString = "";
  // construct answerArray using X , Y and Z
  switch (answerArray.length) {
    case 1:
      answerString = answerArray[0];
      break;
    case 2:
      answerString = `${answerArray[0]} and ${answerArray[1]}`;
      break;
    case 3:
      answerString = `${answerArray[0]}, ${answerArray[1]} and ${answerArray[2]}`;
      break;
    case 4:
      answerString = `${answerArray[0]}, ${answerArray[1]}, ${answerArray[2]} and ${answerArray[3]}`;
      break;
    case 5:
      answerString = `${answerArray[0]}, ${answerArray[1]}, ${answerArray[2]}, ${answerArray[3]} and ${answerArray[4]}`;
  }

  return answerString;
}

console.log(formatDuration(3660));

/*

min = 60 s
hour = 3 600 s
day = 86 400 s
year = 31 536 000 s

*/
