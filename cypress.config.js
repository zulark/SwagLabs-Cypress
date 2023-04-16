const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '565qvj',
  e2e: {
    // baseUrl: 'http://saucedemo.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    watchForFileChanges: false,
  },
})