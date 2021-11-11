//Polyfill of reduce function
Array.prototype.myReduce = function (func, accumulator = this[0]) {
  for (let i = 0; i < this.length; i++) {
    accumulator = fun(accumulator, this[i], i);
  }
  return accumulator;
};
