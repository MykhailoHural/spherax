import { BasePage } from './base.page';

export class CognitoPage extends BasePage {
  readonly usernameInput = this.page.locator('#signInFormUsername').last();
  readonly passwordInput = this.page.locator('#signInFormPassword').last();
  readonly signInButton = this.page.locator('input[name="signInSubmitButton"]').last();

  async signIn(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}