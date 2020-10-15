module.exports = {

    url: 'https://www.google.com/advanced_search?hl=en',

    elements: {   
        searchTextbox : 'input[name="as_q"]',
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

        setQuery(value) {
            return this
                    .setValue('@searchTextbox', value)
        }

    }]
    
}