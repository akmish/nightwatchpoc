const baseConfig = require('./nightwatch.conf.js');
const cuConfig = require('./cucumber.conf.js');

const config = {
    ...baseConfig,
    ...cuConfig,
    webdriver: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    },  
};

// const config1 = {
//     ...cuConfig,
//     webdriver: {
//         'start_process': false,
//         'host': 'hub-cloud.browserstack.com',
//         'port': 80
//     },  
// };

config.test_settings.default = {
    desiredCapabilities: {
      os: 'Windows',
      os_version: '10',
      browserName: 'chrome',
      ['browserstack.local']: false,
      chromeOptions: {
          args: []
      }
    }
};

config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;

config.test_settings.firefox = {
    desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browserName: 'Firefox',
        browser_version: '74',
        ['browserstack.local']: false
    }
};

config.test_settings.safari = {
    desiredCapabilities: {
        os: 'OS X',
        os_version: 'Catalina',
        browserName: 'safari',
        //browser_version: '85',
        ['browserstack.local']: false
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config;