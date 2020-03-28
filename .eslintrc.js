module.exports = {
  extends: "hackreactor",
  rules: {
    // Rules here will override the 'hackreactor' configuration
    // http://eslint.org/docs/rules/

  },
  overrides: [{
    excludedFiles: ["./dist/bundle.js", "./database/sample_products.js"],
    rules: {
      quotes: ["error", "single"]
    }
  }]
};