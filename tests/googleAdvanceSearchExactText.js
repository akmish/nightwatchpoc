module.exports = {
    '@tags': ['google'],
    'Google Advanced Search Test: Exact Word'(browser) {

        const mainQuery = 'rat terrier';
        const page = browser.page.googleAdvanceSearchPage();
        const resultPageSearchfField = `#searchform [name="q"]`;
        
        page
            .navigate()
            .setQuery('@searchExactTextTextbox', mainQuery)
            .selectFilter('@langDropdown', 'lang_ar')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search()

        browser
            .assert.urlContains('as_epq=rat+terrier', "Param: Query is "+`"${mainQuery}`)
            .assert.urlContains('lr=lang_ar', "Param: Language is Arabic")
            .assert.urlContains('as_qdr=m', "Param: Time period is Past Month")
            .assert.visible(resultPageSearchfField, "UI: " +`${mainQuery}`+ " is set in query input")
            .saveScreenshot('tests_output/google_exactword.png')
    }
}