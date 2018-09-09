/*eslint-disable */
module.exports = {
  moduleNameMapper: {
    // identity-obj-proxy is great if we are working with css-modules, they are replaced @ import and we can still see the classnames
    '\\.module\\.css$': 'identity-obj-proxy',
    // below we are replacing any css import w/ a mock to not have to deal with convoluted innerHTML
    '\\.css$': require.resolve('./app/style.mock')
  },
  // // include our localStorage mock
  // setupTestFrameworkScriptFile: require.resolve(
  //   '../test/setup-test-setupTestFrameworkScriptFile'
  // ),
  // option to whitelist where we want our test coverage counted -> good to exclude supportive tests for example
  collectCoverageFrom: ['**/app/**/*.js'],
  // important option if we want for certain paths to never drop below a certain coverage
  // going under these threshholds will give you errors in CI if you break them

  coverageThreshold: {
    global: {
      statements: 18,
      branches: 13,
      functions: 19,
      lines: 18
    }
  }
};
