function formatDuration(seconds) {
  if (seconds < 0) return "please provide a positive seconds value";
  if (seconds === 0) return "now";

  let time = {
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };

  if (seconds >= 60) {
    time.minute = Math.floor(seconds / 60);
  }
  if (time.minute >= 60) {
    time.hour = Math.floor(time.minute / 60);
  }
  if (time.hour >= 24) {
    time.day = Math.floor(time.hour / 24);
  }
  if (time.day >= 365) {
    time.year = Math.floor(time.day / 365);
  }

  time.second = seconds % 60;
  time.minute = time.minute % 60;
  time.hour = time.hour % 24;
  time.day = time.day % 365;

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
      break;
  }

  return answerString;
}

console.log(formatDuration(91535941));

/*

min = 60 s
hour = 3 600 s
day = 86 400 s
year = 31 536 000 s

*/
