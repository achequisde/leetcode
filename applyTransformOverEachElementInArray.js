var map = function (arr, fn) {
  function* applyFnOverArray(arr, fn) {
    for (const [i, elem] of arr.entries()) {
      yield fn(elem, i);
    }
  }

  return Array.from(applyFnOverArray(arr, fn));
};

console.log(map([1, 2, 3], (x) => x ** 2));
