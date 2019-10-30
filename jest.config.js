module.exports = {
  projects: [],
  collectCoverage: true,
  collectCoverageFrom: ['source/**.js', '!**/*.test.js', '!**/node_modules/**'],
  coverageReporters: ['text-summary', 'lcov']
}
