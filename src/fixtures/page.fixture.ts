import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

type PageFixtures = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
