const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false,   slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await submitBtn.isHidden());
    
    await browser.close();
})();
