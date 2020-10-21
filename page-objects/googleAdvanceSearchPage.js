module.exports = {

    url: 'https://www.google.com/advanced_search?hl=en',

    elements: {   
        searchTextbox : 'input[name="as_q"]',
        searchExactTextTextbox : 'input[name=as_epq]',
        searchEitherTextTextbox : 'input[name=as_oq]',
        langDropdown : '#lr_button',
        lastUpdateDropdown : '#as_qdr_button',
        submitButton : '.jfk-button[type="submit"]'
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