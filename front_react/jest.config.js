module.exports = {
  roots: ['<rootDir>/server'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: ['<rootDir>/server/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/setupTestsAfterEnv.js',
    'testing-library/jest-dom/extend-expect',
    '@testing-library/user-event',
    '@testing-library/react-hooks',
    '@testing-library/jest-dom',
    'react-testing-library/cleanup-after-each'
  ], // setupFiles before the tests are ran

  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: [],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$']
};
