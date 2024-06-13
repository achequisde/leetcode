var TimeLimitedCache = function() {

};

function isExpired(ms) {
  return ms - Date.now() <= 0;
}

const keys = new Map();

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let existed = this.get(key) != -1;

  keys.set(key, [value, Date.now() + duration]);

  return existed;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  if (!keys.has(key)) {
    return -1;
  }

  let value = keys.get(key);

  if (isExpired(value[1])) {
    return - 1;
  }

  return value[0];
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  let count = 0;

  keys.forEach((value, key) => {
    if (!isExpired(value[1])) {
      count++;
    }
  });

  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
