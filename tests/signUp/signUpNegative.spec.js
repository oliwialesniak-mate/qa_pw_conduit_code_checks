import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';

test.describe('Sign up negative tests', () => {
  let signUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
    await signUpPage.open();
  });

  test('Assert error message for empty username in Sign up form', async () => {
    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();

    await signUpPage.assertErrorMessageContainsText(
      `username:Username must start with a letter, have no spaces, and be 2 - 40 characters.`
    );
  });

  test('Assert error message for empty email in Sign up form', async () => {
    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();

    await signUpPage.assertErrorMessageContainsText(
      `email:This email does not seem valid.`
    );
  });

  test('Assert error message for empty password in Sign up form', async () => {
    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.clickSignUpButton();

    await signUpPage.assertErrorMessageContainsText(`password:can't be blank`);
  });
});
