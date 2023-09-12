const path = require('path');

module.exports = {
  // ... другая конфигурация webpack ...

  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
};