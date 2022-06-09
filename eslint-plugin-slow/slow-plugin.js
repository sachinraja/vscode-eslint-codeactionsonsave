function wait(ms) {
  var start = Date.now(),
      now = start;

  while (now - start < ms) {
    now = Date.now();
  }
}

module.exports = {
  rules: {
    slow: {
      create() {
        wait(5000)

        return {}
      }
    }
  }
}