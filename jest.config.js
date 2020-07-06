
module.exports = {
  clearMocks: true,
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './spec/coverage',
  projects: [
    {
      displayName: 'backEnd',
      testEnvironment: 'node',
      collectCoverageFrom:['spec/*.test.node.js'],
      testMatch: [
        '**/spec/**.test.node.js',
      ],
    },

    {
      displayName: 'frontEnd',
      testEnvironment: 'jsdom',
      collectCoverageFrom:['spec/frontEnd/*.test.jsx'],
      coverageDirectory: './spec',
      testMatch: ['**/spec/frontEnd/**.test.js?(x)'],
      moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
      },

    },
  ],
};