//Polyfill of filter function
Array.prototype.myFilter = function (condition) {
  const filteredArr = [];
  for (let i = 0; i, this.length; i++) {
    if (condition(this[i])) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};
