const thirdPage = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get haveText() { return $(['Автомобильная социальная сеть', 'Человеческие ответы на автомобильные вопросы']) }
}

module.exports = new thirdPage();
