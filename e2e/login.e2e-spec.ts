import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login tests', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
    });

    it('Login form should be valid', () => {
        page.getEmailTextbox().sendKeys('info@sibeeshpassion.com');
        page.getPasswordTextbox().sendKeys('1234');

        let form = page.getForm().getAttribute('class');

        expect(form).toContain('ng-valid');
    });

    it('Login form should be invalid', () => {
        page.getEmailTextbox().sendKeys('');
        page.getPasswordTextbox().sendKeys('');

        let form = page.getForm().getAttribute('class');

        expect(form).toContain('ng-invalid');
    });

    it('Should set email value to local storage', () => {
        page.getEmailTextbox().sendKeys('info@sibeeshpassion.com');
        page.getPasswordTextbox().sendKeys('1234');

        page.getSubmitButton().click();

        let valLocalStorage = browser.executeScript("return window.localStorage.getItem('LoggedInUser');");
        expect(valLocalStorage).toEqual('info@sibeeshpassion.com');
    });
});