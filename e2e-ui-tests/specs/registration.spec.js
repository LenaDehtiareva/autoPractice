const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { RegistrationPage } = require('../pages/registrationPage');
const { EditProfilePage } = require('../pages/editProfilePage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");
const { faker } = require('@faker-js/faker');

let registrationPage;
const env = config.default.use.env;

test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });

    test('Register with valid data', async ({ page }) => {
//        await registrationPage.register (users[env].faker.internet.userName, users[env].faker.internet.email, users[env].user.password);
       await registrationPage.register (users[env].user.fullName, faker.internet.email(), users[env].user.password);
       await expect(page.locator('h2')).toHaveText('Login form');
        prompt();
    });
  
    
    test.only('Click Sigh in link', async ({ page }) => {
               await registrationPage.clickSignInLink();
               await expect(page.locator('h2')).toHaveText('Login form');
            });

});
