const reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'e2e/report/cucumber_report.json',
  output: 'e2e/report/cucumber_report.html',
  name: 'Detox Report cucumber example',
  brandTitle: 'Report Cucumber',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
};

reporter.generate(options);
