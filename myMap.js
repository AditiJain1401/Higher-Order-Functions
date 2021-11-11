//Polyfill of map function
Array.prototype.myMap = function (modify) {
  //[1,2,4,6]
  const modifiedArr = [];
  for (i = 0; i < this.length; i++) {
    modifiedArr.push(modify(this[i], i));
  }
  return modifiedArr;
};
