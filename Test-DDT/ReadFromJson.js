const excelObj = require('exceljs');

describe('Read From JSON File', () => {
    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get("https://juliemr.github.io/protractor-demo/");
        browser.manage().window().maximize();
    })

    it('Addition of numbers', () => {
        element(by.model("first")).sendKeys(browser.params.add.num1);
        element(by.model("operator")).click();
        browser.sleep(1000);
        element(by.css("option[value='ADDITION']")).click();
        element(by.model("second")).sendKeys(browser.params.add.num2);
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual(browser.params.add.expected);
    });

    it('Division of numbers', () => {
        element(by.model("first")).sendKeys(browser.params.divide.num1);
        element(by.model("operator")).click();
        browser.sleep(1000);
        element(by.css("option[value='DIVISION']")).click();
        element(by.model("second")).sendKeys(browser.params.divide.num2);
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual(browser.params.divide.expected);
    });

    afterAll(() => {
        const historyElement = element.all(by.repeater('result in memory'));
        expect(historyElement.count()).toEqual(2);
    })
})