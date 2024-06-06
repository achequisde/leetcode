function createCounter(init) {
  return {
    init,
    counter: init,
    increment() {
      return ++this.counter;
    },
    decrement() {
      return --this.counter;
    },
    reset() {
      return (this.counter = this.init);
    },
  };
}
