const puppeteer = require("puppeteer");
const lighthouse = require("lighthouse");

// This port will be used by Lighthouse later. The specific port is arbitrary.
const PORT = 8041;

/**
 * @param {import('puppeteer').Browser} browser
 */
async function login(browser) {
  const page = await browser.newPage();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
  );
  await page.waitForSelector('input[name="txtUsername"]', { visible: true });

  // Fill in and submit login form.
  const emailInput = await page.$('input[name="txtUsername"]');
  await emailInput.type("Admin");
  const passwordInput = await page.$('input[name="txtPassword"]');
  await passwordInput.type("admin123");
  await Promise.all([
    page.$eval("#frmLogin", (form) => form.submit()),
    page.waitForNavigation(),
  ]);

  await page.close();
}

async function main() {
  // Direct Puppeteer to open Chrome with a specific debugging port.
  const browser = await puppeteer.launch({
    args: [`--remote-debugging-port=${PORT}`],
    // Optional, if you want to see the tests in action.
    headless: false,
    slowMo: 50,
  });

  // Setup the browser session to be logged into our site.
  await login(browser);

  // The local server is running on port 8000.
  const url = "https://opensource-demo.orangehrmlive.com/index.php/dashboard";
  // Direct Lighthouse to use the same port.
  const result = await lighthouse(url, { port: PORT });
  // Direct Puppeteer to close the browser as we're done with it.
  await browser.close();

  // Output the result.
  console.log(JSON.stringify(result.lhr, null, 2));
}

main();
