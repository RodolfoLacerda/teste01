

module.exports = {
    'login com sucesso': function (browser) {
        var userInfo = '.user .info span'
        browser
            .resizeWindow(1920, 1080)
            .url('https://172.16.9.10/')
            
            .end();
    }
}