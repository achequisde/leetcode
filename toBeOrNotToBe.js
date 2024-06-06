const assert = require("assert");

function expect(val) {
  return {
    val,
    toBe(toCompare) {
      if (this.val !== toCompare) {
        throw "Not Equal";
      }
      return true;
    },
    notToBe(toCompare) {
      if (this.val === toCompare) {
        throw "Equal";
      }
      return true;
    },
  };
}

assert(expect(5).toBe(5));
try {
  expect(5).toBe(6);
} catch (e) {
  assert(e == "Not Equal");
}

assert(expect(5).notToBe(6));
try {
  expect(5).notToBe(5);
} catch (e) {
  assert(e == "Equal");
}
