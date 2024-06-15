/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  let limit = functions.length;
  let count = 0;
  let array = new Array(limit);

  return new Promise((resolve, reject) => {
    for (let [i, fn] of functions.entries()) {
      fn().then((val) => {
        array[i] = val;
        count++;
        if (count == limit) {
          resolve(array);
        }
      }).catch(reject);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
