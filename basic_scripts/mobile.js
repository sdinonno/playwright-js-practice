const { chromium } = require('playwright');
const iPhone = devices['iPhone 11'];

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:100});
    const context = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation:{latitude: -31.2503, longitude: -61.4867},
        locale: 'fr-FR'
    });
    const page = await context.newPage();
    await page.goto('https://google.com/maps');
    await page.waitForTimeout(5000);
    await browser.close();
})();
