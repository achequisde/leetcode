/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  if (nums.length == 0) {
    return init;
  }

  let value = init;

  for (let i = 0; i < nums.length; value = fn(value, nums[i]), i++);

  return value;
};
