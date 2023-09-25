function formatDuration(seconds) {
  // check +ve int
  if (seconds < 0) return "please provide a positive seconds value";
  // if 0 return now
  if (seconds === 0) return "now";

  let time = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // check mins
  if (seconds >= 60) {
    time.minutes = Math.floor(seconds / 60);
  }
  // check hours
  if (time.minutes >= 60) {
    time.hours = Math.floor(time.minutes / 60);
  }
  // check days
  if (time.hours >= 24) {
    time.days = Math.floor(time.hours / 24);
  }
  // check years
  if (time.days >= 365) {
    time.years = Math.floor(time.days / 365);
  }

  // set secs
  time.seconds = seconds % 60;
  // set mins
  time.minutes = time.minutes % 60;
  // set hours
  time.hours = time.hours % 24;
  // set days
  time.days = time.days % 365;

  console.log(time);

  // construct answer using X , Y and Z
  let answer = {
    years: `${time.years} years`,
    days: `${time.days} days`,
    hours: `${time.hours} hours`,
    mins: `${time.minutes} minutes`,
    secs: `${time.seconds} seconds`,
  };
  if (time.years === 1) {
    answer.years = "1 year";
  }
  if (time.days === 1) {
    answer.days = "1 day";
  }
  if(time.hours === 1) {
    answer.hours = "1 hour"
  }
  if (time.mins === 1) {
    answer.mins = "1 minute"
  }
  if (time.seconds === 1) {
    answer.secs = "1 second"
  }


  let answerSentence = `${answer.years}, ${answer.days}, ${answer.hours}, ${answer.mins} and ${answer.secs}`
  return answerSentence;
}

console.log(formatDuration(558601));

/*

min = 60 s
hour = 3 600 s
day = 86 400 s
year = 31 536 000 s

*/
