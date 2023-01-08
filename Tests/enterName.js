// spec.js
describe('Display my name in angular webpage', () => {

    it('Check webpage title', () => {

        // Launch webpage
        browser.get('https://angularjs.org/');

        // Maximize window
        browser.manage().window().maximize();

        // Enter the text in the inout field
        element(by.model('yourName')).sendKeys('Nidhish');
        browser.sleep(5000);

        // Assertion to test the output
        expect(element(by.binding('yourName'))
            .getText()).toContain('Hello Nidhish!');
        browser.sleep(2000);

        // Close browser
        browser.close();

    });

})