module.exports = {

    url: 'https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/entertainment',

    elements: {   
        searchTextbox : 'input[name="as_q"]',
        searchExactTextTextbox : 'input[name=as_epq]',
        searchEitherTextTextbox : 'input[name=as_oq]',
        langDropdown : '#lr_button',
        lastUpdateDropdown : '#as_qdr_button',
        submitButton : '.jfk-button[type="submit"]',
        link8World: {
            selector: '//div[@data-column="Two-Third"]//article//a',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        selectFilter(selector, value){
            return this
                    .click(selector)
                    .click(`.goog-menuitem[value="${value}"]`);
        },

        linkClick() {
            return this
            .waitForElementVisible('@link8World')
            .click('@link8World')
            .waitForElementVisible('@link8World')
            .click('@link8World')
            .assert.urlContains('edited1')
        },

        setQuery(selector, value) {
            return this
                    .setValue(selector, value)
        }

    }]
    
}