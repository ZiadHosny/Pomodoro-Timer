var workDiv = document.getElementById('work');
var breakDiv = document.getElementById('break');

var style =
  'font-size: 35px; margin-left: 60px; font-weight: 700;font-family: Arial, Helvetica, sans-serif;';

var workHour = 0,
  workMinutes = 0,
  workSeconds = 0,
  isStart = false,
  isResume = false,
  isBreak = false;
var breakHour = 0,
  breakMinutes = 0,
  breakSeconds = 0;

var workInterval;
var breakInterval;

var defaultTime = ' ' + 0 + ' : ' + 0 + '0 : 0' + 0;

var workTime = document.createElement('span');
workTime.style = style;
workTime.innerHTML = defaultTime;

var breakTime = document.createElement('span');
breakTime.style = style;
breakTime.innerText = defaultTime;

workDiv.appendChild(workTime);
breakDiv.appendChild(breakTime);

function start() {
  workSeconds += 1;
  if (workSeconds >= 60) {
    workMinutes += 1;
    workSeconds = 0;
  }
  if (workMinutes >= 60) {
    workHour += 1;
    workMinutes = 0;
  }
  workTime.innerHTML =
    ' ' +
    workHour +
    ' : ' +
    (workMinutes < 10 ? '0' + workMinutes : workMinutes) +
    ' : ' +
    (workSeconds < 10 ? '0' + workSeconds : workSeconds);

  console.log(workTime.innerHTML);
}

function break_() {
  breakSeconds += 1;
  if (breakSeconds >= 60) {
    breakMinutes += 1;
    breakSeconds = 0;
  }
  if (breakMinutes >= 60) {
    breakHour += 1;
    breakMinutes = 0;
  }
  breakTime.innerHTML =
    ' ' +
    breakHour +
    ' : ' +
    (breakMinutes < 10 ? '0' + breakMinutes : breakMinutes) +
    ' : ' +
    (breakSeconds < 10 ? '0' + breakSeconds : breakSeconds);
}

function startWork() {
  if (!isStart) {
    clearInterval(breakInterval);
    workInterval = setInterval(start, 1000);
  }
  isStart = true;
}

function resumeWork() {
  if (isBreak && !isResume) {
    clearInterval(breakInterval);
    workInterval = setInterval(start, 1000);
  }
  isResume = true;
  isBreak = false;
}

function startBreak() {
  if (!isBreak) {
    clearInterval(workInterval);
    breakInterval = setInterval(break_, 1000);
  }
  isBreak = true;
  isResume = false;
}

function endWork() {
  (workHour = 0), (workMinutes = 0), (workSeconds = 0);
  (breakHour = 0), (breakMinutes = 0), (breakSeconds = 0);
  (isResume = false), (isStart = false), (isBreak = false);

  alert(
    'Work Time : ' +
      workTime.innerHTML +
      '\n' +
      'Break Time ' +
      breakTime.innerHTML
  );

  workTime.innerHTML = defaultTime;
  breakTime.innerText = defaultTime;
  clearInterval(workInterval);
  clearInterval(breakInterval);
}
