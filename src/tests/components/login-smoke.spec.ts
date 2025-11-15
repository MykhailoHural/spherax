import { test, expect } from '../../fixtures/page.fixture';

test.describe('Login Page Smoke Test', () => {

  test('should open the page, verify UI and check validation', async ({ loginPage, page }) => {

    await test.step('1: Navigate to the Login Page', async () => {
      await loginPage.navigateToLogin();
    });

    await test.step('2: Verify that key UI elements are visible', async () => {
      await expect(loginPage.logo).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    });

    await test.step('3: Click login button and verify validation message', async () => {
      await loginPage.loginButton.click();
      await expect(page).toHaveURL(/amazoncognito\.com/, { timeout: 10000 });
    });
  });
});
