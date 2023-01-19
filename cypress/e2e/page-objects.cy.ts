import { LoginPage } from "../pages/Login";
import { ProfilePage } from "../pages/Profile";

describe("Page objects example", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
 
  it("success login scenario", () => {
    //LoginPage.submitLogin("test", "Test1234*")
    LoginPage.usernameElement.type("test")
    LoginPage.passwordElement.type("Test1234*")
    LoginPage.loginElement.click()
    cy.url().should("contain", "profile")
    LoginPage.userElement.should("have.text", "test")
    ProfilePage.headerElement.should("have.text", "Profile")
  });

  it("wrong login scenario", () => {
    LoginPage.submitLogin("wrongUser", "wrongPassword")
    cy.url().should("not.contain", "profile")
    LoginPage.invalidLoginMessageElement.should("have.text", "Invalid username or password!")
    LoginPage.headerElement.should("have.text", "Login")
  });
})