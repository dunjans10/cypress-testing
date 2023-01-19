describe("Custom commands example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`)
  });

  it("success login scenario", () => {
    cy.login("test", "Test1234*")
    cy.url().should("contain", "profile")
  });

  it("wrong login scenario", () => {
    cy.login("wrongUser", "wrongPassword")
    cy.url().should("contain", "login")
  });
})
