var faker = require('faker');

describe('Why to use Protractor', () => {

    it('Super Calculator', async() => {
        browser.get("https://letcode.in/edit");
        // await browser.waitForAngularEnabled(false);
        // await browser.manage().timeouts().implicitlyWait(5000);

        const firstName = faker.name.firstName();
        element(by.id("fullName")).sendKeys(faker.name.firstName());


    })
})