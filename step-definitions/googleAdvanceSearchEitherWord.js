const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let page = require('../page-objects/googleAdvanceSearchPage.js');

Given(/^Is open Google's search page$/, () => {
  return client.url('http://google.com/advanced_search?hl=en').waitForElementVisible('body', 1000);
});

Then(/^thes title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^thes Google search form exists$/, () => {
  return client.assert.visible('input[name="as_q"]');
});

When(/^adds \"([^\"]*)\" in searchbox$/, searchString => {
   return client.setValue('input[name="as_q"]', searchString)
});

When(/^adds \"([^\"]*)\" in languageTestBox$/, langString => {
        return client
              .click(`#lr_button`)
              .click(`.goog-menuitem[value="lang_th"]`);
});

When(/^adds \"([^\"]*)\" in lastUpdateTestBox$/, lastupdateString => {
        return client
              .click(`#as_qdr_button`)
              .click(`.goog-menuitem[value="w"]`);
});

When('clicks on search button', function () {
  return client.click(`.jfk-button[type="submit"]`);
});

Then('verifys url contains bill gates', function (string) {
  return client.assert.urlContains(`as_q=Bill+Gates`);
});

Then('verifys url parameter to search {string}', function (string) {
  return client.urlContains('lr=lang_th', "Param: Language is Thai");
});

Then('verifys url parameter to search {string}', function (string) {
  return client.urlContains('as_qdr=w', "Param: Time period is Past Week");
});

Then('verifys searchbox contains {string}', function (string) {
  return client.visible(`#searchform [name="q"][value="Bill Gates"]`, "UI: Bill Gates is set in query input");
});