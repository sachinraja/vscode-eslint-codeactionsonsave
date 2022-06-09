module.exports = {
  plugins: ['slow'],
  rules: {
    'slow/slow': 'error'
  },
  ignorePatterns: [
    '/eslint-plugin-slow'
  ]
};
