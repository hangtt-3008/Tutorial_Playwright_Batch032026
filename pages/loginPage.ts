export class LoginPage {

  async gotoLoginPage() {
    console.log("Go to Login Page");
  }

  async login(username: string, password: string) {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Click Login Button");
  }

}