
module.exports = {
  clearMocks: true,
  verbose: true,
  collectCoverage: true,
  projects: [
    {
      displayName: 'backEnd',
      testEnvironment: 'node',
      collectCoverageFrom:['spec/*.test.node.js'],
      coverageDirectory: './spec',
      testMatch: [
        '**/spec/**.test.node.js',
      ],
    },

    {
      displayName: 'frontEnd',
      testEnvironment: 'jsdom',
      collectCoverageFrom:['spec/*.test.jsx'],
      coverageDirectory: './spec/frontEnd/coverage',
      testMatch: ['**/spec/frontEnd/**.test.js?(x)'],
      moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
      },

    },
  ],
};