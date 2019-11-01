

module.exports = {
    'login com sucesso': function (browser) {
        var userInfo = '.user .info span'
        browser
            .resizeWindow(1920, 1080)
            .url('https://172.16.9.10/')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
            .setValue('input[name=password]', 'pwd123')
            .click('.login-button')
            .waitForElementVisible(userInfo, 3000)
            .assert.containsText(userInfo, 'Quilombo')
            .end();
    }
}