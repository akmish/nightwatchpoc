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
            selector: '//h3[@class="article-title modulewrap"]/a[@xpath="1"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        selectFilter(selector, value){
            return this
                    .click(selector)
                    .click(`.goog-menuitem[value="${value}"]`);
        },

        search() {
            return this
            .click('@submitButton');
        },

        setQuery(selector, value) {
            return this
                    .setValue(selector, value)
        }

    }]
    
}