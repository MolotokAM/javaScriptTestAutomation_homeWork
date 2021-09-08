const mainPage = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get mainIcon() { return $('.c - logo') }
}

module.exports = new mainPage();
