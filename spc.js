const day1span = document.getElementById("spc-1-countdown");
const day2span = document.getElementById("spc-2-countdown");
const day3span = document.getElementById("spc-3-countdown");
const day4to8span = document.getElementById("spc-4-8-countdown");

const day1progress = document.getElementById("spc-1-progress-bar");
const day2progress = document.getElementById("spc-2-progress-bar");
const day3progress = document.getElementById("spc-3-progress-bar");
const day4to8progress = document.getElementById("spc-4-8-progress-bar");

const day1localTime = document.getElementById("spc-1-local-time");
const day2localTime = document.getElementById("spc-2-local-time");
const day3localTime = document.getElementById("spc-3-local-time");
const day4to8localTime = document.getElementById("spc-4-8-local-time");

// Day 1 outlooks are issued at 0600 UTC, 1300 UTC, 1630 UTC, 2000 UTC, and 0100 UTC.
const day1times = ["01:00", "06:00", "13:00", "16:30", "20:00"];
// Day 2 outlooks are issued at 0600 UTC and 1730 UTC
const day2times = ["06:00", "17:30"];
// Day 3 outlooks are issued at 0730 UTC
const day3times = ["07:30"];
// Day 4-8 outlooks are issued at 0900 UTC
const day4to8times = ["09:00"];

function updateCountdowns() {
  const currentTime = new Date();
  const currentUTCTime = currentTime.toISOString().slice(11, 16);

  let day1time = null;
  let day2time = null;
  let day3time = null;
  let day4to8time = null;

  for (const time of day1times) {
    if (time > currentUTCTime) {
      day1time = time;
      break;
    }
  }

  for (const time of day2times) {
    if (time > currentUTCTime) {
      day2time = time;
      break;
    }
  }

  for (const time of day3times) {
    if (time > currentUTCTime) {
      day3time = time;
      break;
    }
  }

  for (const time of day4to8times) {
    if (time > currentUTCTime) {
      day4to8time = time;
      break;
    }
  }

  let day1InFuture = false;
  let day2InFuture = false;
  let day3InFuture = false;
  let day4to8InFuture = false;

  // Check if the current time is after the last issuance time for each day
  if (day1time === null) {
    day1time = day1times[0];
    day1InFuture = true;
  }
  if (day2time === null) {
    day2time = day2times[0];
    day2InFuture = true;
  }
  if (day3time === null) {
    day3time = day3times[0];
    day3InFuture = true;
  }
  if (day4to8time === null) {
    day4to8time = day4to8times[0];
    day4to8InFuture = true;
  }

  const day1date = new Date();
  const day2date = new Date();
  const day3date = new Date();
  const day4to8date = new Date();

  day1date.setUTCHours(parseInt(day1time.slice(0, 2), 10));
  day1date.setUTCMinutes(parseInt(day1time.slice(3), 10));
  day1date.setUTCSeconds(0);
  day1date.setUTCMilliseconds(0);

  day2date.setUTCHours(parseInt(day2time.slice(0, 2), 10));
  day2date.setUTCMinutes(parseInt(day2time.slice(3), 10));
  day2date.setUTCSeconds(0);
  day2date.setUTCMilliseconds(0);

  day3date.setUTCHours(parseInt(day3time.slice(0, 2), 10));
  day3date.setUTCMinutes(parseInt(day3time.slice(3), 10));
  day3date.setUTCSeconds(0);
  day3date.setUTCMilliseconds(0);

  day4to8date.setUTCHours(parseInt(day4to8time.slice(0, 2), 10));
  day4to8date.setUTCMinutes(parseInt(day4to8time.slice(3), 10));
  day4to8date.setUTCSeconds(0);
  day4to8date.setUTCMilliseconds(0);

  if (day1InFuture) {
    day1date.setDate(day1date.getDate() + 1);
  }

  if (day2InFuture) {
    day2date.setDate(day2date.getDate() + 1);
  }

  if (day3InFuture) {
    day3date.setDate(day3date.getDate() + 1);
  }

  if (day4to8InFuture) {
    day4to8date.setDate(day4to8date.getDate() + 1);
  }

  const day1diff = day1date - currentTime;
  const day2diff = day2date - currentTime;
  const day3diff = day3date - currentTime;
  const day4to8diff = day4to8date - currentTime;

  // If minutes or seconds are less than 10, add a leading zero

  const day1diffHours = Math.floor(day1diff / 3600000);
  const day1diffMinutes = Math.floor((day1diff % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const day1diffSeconds = Math.floor((day1diff % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  const day2diffHours = Math.floor(day2diff / 3600000);
  const day2diffMinutes = Math.floor((day2diff % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const day2diffSeconds = Math.floor((day2diff % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  const day3diffHours = Math.floor(day3diff / 3600000);
  const day3diffMinutes = Math.floor((day3diff % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const day3diffSeconds = Math.floor((day3diff % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  const day4to8diffHours = Math.floor(day4to8diff / 3600000);
  const day4to8diffMinutes = Math.floor((day4to8diff % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const day4to8diffSeconds = Math.floor((day4to8diff % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  day1span.textContent = `${day1diffHours}:${day1diffMinutes}:${day1diffSeconds}`;
  day2span.textContent = `${day2diffHours}:${day2diffMinutes}:${day2diffSeconds}`;
  day3span.textContent = `${day3diffHours}:${day3diffMinutes}:${day3diffSeconds}`;
  day4to8span.textContent = `${day4to8diffHours}:${day4to8diffMinutes}:${day4to8diffSeconds}`;

  const day1totalSeconds = day1diff / 1000;
  const day2totalSeconds = day2diff / 1000;
  const day3totalSeconds = day3diff / 1000;
  const day4to8totalSeconds = day4to8diff / 1000;

  let day1totalSecondsInDay = 0;
  let day2totalSecondsInDay = 0;

  // Get the seconds between the previous issuance and the next issuance
  switch (day1time) {
    case "01:00":
      day1totalSecondsInDay = 18000;
      break;
    case "06:00":
      day1totalSecondsInDay = 18000;
      break;
    case "13:00":
      day1totalSecondsInDay = 25200;
      break;
    case "16:30":
      day1totalSecondsInDay = 12600;
      break;
    case "20:00":
      day1totalSecondsInDay = 12600;
      break;
  }

  switch (day2time) {
    case "06:00":
      day2totalSecondsInDay = 39600;
      break;
    case "17:30":
      day2totalSecondsInDay = 61200;
      break;
  }

  const day3totalSecondsInDay = 86400;
  const day4to8totalSecondsInDay = 86400;

  const day1progressValue =
    (day1totalSecondsInDay - day1totalSeconds) / day1totalSecondsInDay;
  const day2progressValue =
    (day2totalSecondsInDay - day2totalSeconds) / day2totalSecondsInDay;
  const day3progressValue =
    (day3totalSecondsInDay - day3totalSeconds) / day3totalSecondsInDay;
  const day4to8progressValue =
    (day4to8totalSecondsInDay - day4to8totalSeconds) / day4to8totalSecondsInDay;

  day1progress.style.width = `${day1progressValue * 100}%`;
  day2progress.style.width = `${day2progressValue * 100}%`;
  day3progress.style.width = `${day3progressValue * 100}%`;
  day4to8progress.style.width = `${day4to8progressValue * 100}%`;

  // Show the user when the next outlook comes out in their local time
  const day1localDate = new Date(day1date);
  const day2localDate = new Date(day2date);
  const day3localDate = new Date(day3date);
  const day4to8localDate = new Date(day4to8date);

  day1localTime.textContent =
    (day1InFuture ? "Tomorrow at " : "") +
    day1localDate.toLocaleTimeString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: "2-digit",
      minute: "2-digit",
    });

  day2localTime.textContent =
    (day2InFuture ? "Tomorrow at " : "") +
    day2localDate.toLocaleTimeString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: "2-digit",
      minute: "2-digit",
    });

  day3localTime.textContent =
    (day3InFuture ? "Tomorrow at " : "") +
    day3localDate.toLocaleTimeString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: "2-digit",
      minute: "2-digit",
    });

  day4to8localTime.textContent =
    (day4to8InFuture ? "Tomorrow at " : "") +
    day4to8localDate.toLocaleTimeString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: "2-digit",
      minute: "2-digit",
    });

  setTimeout(updateCountdowns, 1000);
}

updateCountdowns();
