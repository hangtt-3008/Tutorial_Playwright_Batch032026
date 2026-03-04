import { LoginPage } from "./pages/loginPage";
import { DashboardPage } from "./pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

async function testLogin() {

  await loginPage.gotoLoginPage();

  await loginPage.login("admin", "123456");

  await dashboardPage.verifyLoginSuccess();

}

testLogin();