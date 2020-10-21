module.exports = {
    '@tags': ['google'],
    'Google Advanced Search Test: All Words'(browser) {

        const mainQuery = 'Bill Gates';
        const page = browser.page.googleAdvanceSearchPage();
        const resultPageSearchfField = `#searchform [name="q"][value="${mainQuery}"]`;
        
        page
            .navigate()
            .setQuery('@searchTextbox', mainQuery)
            .selectFilter('@langDropdown', 'lang_th')
            .selectFilter('@lastUpdateDropdown', 'w')
            .search()

        browser
            .assert.urlContains('as_q=Bill+Gates', "Param: Query is Bill Gates")
            .assert.urlContains('lr=lang_th', "Param: Language is Thai")
            .assert.urlContains('as_qdr=w', "Param: Time period is Past Week")
            .assert.visible(resultPageSearchfField, "UI: Bill Gates is set in query input")
            .saveScreenshot('tests_output/google.png')
    }
}