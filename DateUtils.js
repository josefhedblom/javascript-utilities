const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
];
Date.prototype.getCurrentDate = function () {
  let year = this.getFullYear();
  let month = this.getMonth() + 1;
  let day = this.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${year}-${month}-${day}`;
};

Date.prototype.getCurrentWeekday = function () {
  return weekdays[this.getDay()];
};

Date.prototype.getCurrentMonth = function () {
  return months[this.getMonth()];
};

Date.prototype.whatWeekday = function () {
  return weekdays[this.getDay()];
};

Date.prototype.whatMonth = function () {
  return months[this.getMonth()];
};
