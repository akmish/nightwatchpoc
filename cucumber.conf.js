const fs = require('fs');
const path = require('path');

const { setDefaultTimeout, After, AfterAll, BeforeAll } = require("@cucumber/cucumber");
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
  await startWebDriver();
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
      launchReport: true,
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