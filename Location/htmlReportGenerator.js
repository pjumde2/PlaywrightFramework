import { generate } from 'cucumber-html-reporter';

const date = new Date();
const timestamp = `${date.getFullYear()}${
  date.getMonth() + 1
}${date.getDate()}-${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
const tracesDir = 'traces';

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: `report/cucumber_report_${timestamp}.html`,
  storeScreenshots: true,
  screenshotsDirectory: `${tracesDir}/trace.zip`,
  noInlineScreenshots: true,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {},
  failedSummaryReport: true,
};

generate(options);
