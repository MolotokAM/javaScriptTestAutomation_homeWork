const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const mainPage = require('../pageobjects/main.page');
const secondPage = require('../pageobjects/second.page');
const thirdPage = require('../pageobjects/third.page');

describe('Drive2 application', () => {
    it('Сheck <title>', async () => {
        await browser.url(`https://www.drive2.ru/`)
        await expect(browser).toHaveTitle('DRIVE2.RU')
    });
    it('Сheck URL', async () => {
        let url = 'https://www.drive2.ru/'
        await browser.url(url)
        await expect(browser).toHaveUrl(url)
    });
    it('Сheck Icon', async () => {
        let url = 'https://www.drive2.ru/'
        await browser.url(url)
        await expect(MainPage.mainIcon).toBeDisplayed()
    });
    it('Сheck href Vovlo', async () => {
        let url = 'https://www.drive2.ru/'
        await browser.url(url)
        await expect(secondPage.mainHref).toHaveHref()
    });
    it('Сheck text', async () => {
        let url = 'https://www.drive2.ru/'
        await browser.url(url)
        await expect(thirdPage.haveText).toHaveText()
    });
});


