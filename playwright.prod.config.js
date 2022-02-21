const { devices } = require('@playwright/test');

const config = require("./playwright.config");

config.projects = [ {
    name: 'chrome',

    /* Project-specific settings. */
    use: {
      channel:"chrome",
      headless:false,
      ...devices['Desktop Chrome'],
    },
}];

module.exports = config;