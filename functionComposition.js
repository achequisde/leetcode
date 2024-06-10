/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
    let temp = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      temp = functions[i](temp);
    }

    return temp;
  }
};
