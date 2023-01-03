Array.prototype.times = function (num) {
  return this.map((x) => x * num);
};

Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  });
};

Array.prototype.removeItem = function (item) {
  let index = this.indexOf(item);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.min = function () {
  this.sort(function (a, b) {
    return a - b;
  });
  return this[0];
};

Array.prototype.max = function () {
  this.sort(function (a, b) {
    return b - a;
  });
  return this[0];
};

Array.prototype.shuffle = function () {
  this.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  return this;
};

Array.prototype.sortAlphabeticall = function () {
  return this.sort((a, b) => a.localeCompare(b));
};

Array.prototype.print = function (num = 1) {
  let counter = 1;
  while (counter <= num) {
    console.log(`${this}`);
    counter++;
  }
};
