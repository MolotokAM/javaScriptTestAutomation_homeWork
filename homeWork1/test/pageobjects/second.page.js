const secondPage = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get mainHref() { return $('https://www.drive2.ru/experience/volvo/') }
}

module.exports = new secondPage();
