/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  function* filterArray(arr, fn) {
    for (const [i, value] of arr.entries()) {
      if (fn(value, i)) {
        yield value;
      }
    }
  }

  return Array.from(filterArray(arr, fn));
};
