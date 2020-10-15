module.exports = {
    '@tags': ['google'],
    'Google advanced search test: Bill Gates'(browser) {

        const mainQuery = 'Bill Gates';
        const page = browser.page.googleAdvanceSearch();
        const resultPageSearchfField = `#searchform [name="q"][value="${mainQuery}"]`;
        
        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@langDropdown', 'lang_th')
            .selectFilter('@lastUpdateDropdown', 'w')
            .search()

        browser
            .assert.urlContains('as_q=Bill+Gates', "Param: Query is Bill Gates")
            .assert.urlContains('lr=lang_th', "Param: Language is Thai")
            .assert.urlContains('as_qdr=w', "Param: Time period is Past wWeek")
            .assert.visible(resultPageSearchfField, "UI: Bill Gates is set in query input")
            .saveScreenshot('tests_output/google.png')
    }
}