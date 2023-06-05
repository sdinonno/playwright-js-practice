const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://applitools.com');
    await page.screenshot({path: 'screenshot/screenshot.png'});
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'screenshot/logo.png'});
    await page.screenshot({path: 'screenshot/fullpage.png', fullPage: true});
    await browser.close();
})();
