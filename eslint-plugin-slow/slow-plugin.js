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
      meta: {
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        }
      },
      create(context) {
        wait(5000)

        return {
          Program(node) {
            // an arbitrary error
            context.report({
              node,
              messageId: "avoidName",
              data: {
                  name: "foo",
              }
            });
          }
        }
      }
    }
  }
}