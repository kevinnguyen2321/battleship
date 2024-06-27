module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
};
