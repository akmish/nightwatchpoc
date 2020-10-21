module.exports = {
    '@tags': ['google1'],
    'Google Advanced Search Test: Either Word'(browser) {

        const mainQuery = 'miniature standard';
        const mainResult = 'miniature OR standard';
        const page = browser.page.googleAdvanceSearchPage();
        const resultPageSearchfField = `#searchform [name="q"][value="${mainResult}"]`;
        
        page
            .navigate()
            .setQuery('@searchEitherTextTextbox', mainQuery)
            .selectFilter('@langDropdown', 'lang_zh-TW')
            .selectFilter('@lastUpdateDropdown', 'd')
            .search()

        browser
            .assert.urlContains('as_oq=miniature+standard', "Param: Query is Miniature OR Standard")
            .assert.urlContains('lr=lang_zh-TW', "Param: Language is Chinese")
            .assert.urlContains('as_qdr=d', "Param: Time period is Past 24 Hours")
            .assert.visible(resultPageSearchfField, "UI: " +`${mainQuery}`+ " is set in query input")
            .saveScreenshot('tests_output/google.png')
    }
}