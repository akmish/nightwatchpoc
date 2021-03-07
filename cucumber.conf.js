const fs = require('fs');
const path = require('path');
const baseConfig = require('./nightwatch.conf.js');
const bsConfig = require('./nightwatch.browserstack.conf.js');

const config = {
    ...baseConfig
};

const bs_config = {
    ...bsConfig
};

const { setDefaultTimeout, After, AfterAll, BeforeAll, Before } = require("@cucumber/cucumber");
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots
} = require("nightwatch-api");

const reporter = require('cucumber-html-reporter');

setDefaultTimeout(60000);

BeforeAll(async () => {
  //await startWebDriver({ env: process.env.NIGHTWATCH_ENV || test_setting});
  await createSession();
});

AfterAll(async () => {
 await closeSession();
 await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: "bootstrap",
      jsonFile: "report/cucumber_report.json",
      output: "report/cucumber_report.html",
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: false,
      metadata: {
        "App Version": "v0.9",
        "Test Environment": "Nightwatch POC",
      },
    });
  }, 1000);
});

After(function() {
  getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
});

for (var i in bs_config.test_settings) {
    var test_setting = bs_config.test_settings[i];
    startWebDriver({ env: process.env.NIGHTWATCH_ENV || test_setting});
    //prts++;
   // test_setting = config;
}

module.exports = bs_config;