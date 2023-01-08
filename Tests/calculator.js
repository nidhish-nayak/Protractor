describe('Testing the demo calculator', () => {

    it('Calculator webpage', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize()

        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Addition of values: 5 & 3', () => {
        element(by.model('first')).sendKeys(5);
        element(by.model('operator')).sendKeys('+');
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();
        expect(element(by.className('ng-binding')).getText()).toEqual('8');
        browser.sleep(3000);
    });
})