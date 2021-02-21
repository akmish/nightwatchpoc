const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let page = require('../page-objects/googleAdvanceSearchPage.js');

Given(/^I open Google's search page$/, () => {
  return client.url('http://google.com/advanced_search?hl=en').waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="as_q"]');
});

When(/^add \"([^\"]*)\" in searchbox$/, searchString => {
   return client.setValue('input[name="as_q"]', searchString)
});

When(/^add \"([^\"]*)\" in languageTestBox$/, langString => {
    return client
              .click(`#lr_button`)
              .click(`.goog-menuitem[value="lang_th"]`);
});

When(/^add \"([^\"]*)\" in lastUpdateTestBox$/, lastupdateString => {
    return client
              .click(`#as_qdr_button`)
              .click(`.goog-menuitem[value="w"]`);
});

When('click on search button', function () {
  return client.click(`.jfk-button[type="submit"]`);
});

Then('verify url contains bill gates', function (string) {
  return client.assert.urlContains(`as_q=Bill+Gates`);
});

Then('verify url parameter to search {string}', function (string) {
  return client.urlContains('lr=lang_th', "Param: Language is Thai");
});

Then('verify url parameter to search {string}', function (string) {
  return client.urlContains('as_qdr=w', "Param: Time period is Past Week");
});

Then('verify searchbox contains {string}', function (string) {
  return client.visible(`#searchform [name="q"][value="Bill Gates"]`, "UI: Bill Gates is set in query input");
});