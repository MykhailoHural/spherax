import { test, expect } from '../../fixtures/page.fixture';
import { CognitoPage } from '../../pages/amazonCognito.page';

test.describe('Login Functionality', () => {
  test('should log in successfully with valid credentials', async ({ loginPage, page }) => {
    const cognitoPage = new CognitoPage(page);

    await test.step('1: Navigate to the Cognito form', async () => {
      await loginPage.navigateToLogin();
      await loginPage.loginButton.click();
      await expect(page).toHaveURL(/amazoncognito\.com/, { timeout: 10000 });
    });

    await test.step('2: Fill in credentials and sign in', async () => {
      const userName = process.env.SPHERAX_MASTER_USERNAME!;
      const password = process.env.SPHERAX_MASTER_PASSWORD!;
      await cognitoPage.signIn(userName, password);
    });

    await test.step('3: Verify successful login and navigation to dashboard', async () => {
      await expect(page).toHaveURL('https://app.dev01.sphrx.xyz/');
    });
  });
});
