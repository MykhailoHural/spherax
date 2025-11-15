import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly logo = this.page.getByAltText('Spherax Logo')
  readonly loginButton = this.page.getByRole('button', { name: 'Log In' });

  async navigateToLogin() {
    await this.navigate('/');
  }
}
