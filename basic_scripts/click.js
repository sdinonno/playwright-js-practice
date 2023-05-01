const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:300});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    await page.click('//*[@id="t1"]/table/tr[2]/td[5]/button');
    await page.click('//*[@id="t1"]/table/tr[2]/td[5]/button');
    await page.click('//*[@id="t1"]/table/tr[2]/td[5]/button');
    await page.click('//*[@id="t2"]/table/tr[3]/td[8]/button');
    await page.click('//*[@id="t2"]/table/tr[3]/td[8]/button');
    await page.click('//*[@id="t2"]/table/tr[3]/td[8]/button');
    await browser.close();
})();
