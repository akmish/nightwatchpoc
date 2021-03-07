require("dotenv").config();

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page-objects"],

  test_workers: {
    enabled: true,
    workers: "auto",
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "tests_output/screenshots",
      },
      webdriver: {
        start_process: true,
        server_path: "node_modules/.bin/chromedriver",
        port: 9517,
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          // "args": ["--headless"]
        },
      },
    },
    firefox: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "tests_output/screenshots",
      },
      webdriver: {
        start_process: true,
        server_path: "./node_modules/.bin/geckodriver",
        port: 9516,
      },
      desiredCapabilities: {
        browserName: "firefox",
        marionette: true,
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};
