function formatDuration(seconds) {
  let time = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  // check +ve int
  if (seconds < 0) return "please provide positive seconds value";
  // if 0 return now
  if (seconds === 0) return "now";
  // check mins
  time.seconds = (seconds % 60);
  time.minutes = Math.floor(seconds / 60);
  time.hours = Math.floor(seconds / 3600)
  time.days = Math.floor(seconds / 86400)
  time.years = Math.floor(seconds / 31536000)
  // check hours
  // check days
  // check years
  // construct answer using X , Y and Z
  console.log(time)
  let answer = "";
  return answer;
}

console.log(formatDuration(3662));

/*

min = 60 s
hour = 3 600 s
day = 86 400 s
year = 31 536 000 s

*/
