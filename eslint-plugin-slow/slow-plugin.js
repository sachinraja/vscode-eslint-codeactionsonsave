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
        },
        fixable: 'code'
      },
      create(context) {
        
        return {
          Identifier(node) {
            if (node.name.includes('foo')) {
              wait(3000)

              context.report({
                  node,
                  messageId: "avoidName",
                  data: {
                      name: "foo",
                  },
                  fix(fixer) {
                    return fixer.replaceText(node, 'bar')
                  }
              });
            }
          }
        }
      }
    }
  }
}