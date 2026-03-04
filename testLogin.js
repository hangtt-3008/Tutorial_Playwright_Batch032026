"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginPage_1 = require("./pages/loginPage");
const dashboardPage_1 = require("./pages/dashboardPage");
const loginPage = new loginPage_1.LoginPage();
const dashboardPage = new dashboardPage_1.DashboardPage();
function testLogin() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loginPage.gotoLoginPage();
        yield loginPage.login("admin", "123456");
        yield dashboardPage.verifyLoginSuccess();
    });
}
testLogin();
