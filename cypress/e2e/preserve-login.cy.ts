Cypress.session.clearAllSavedSessions();

describe("Preserve login", () => {
  beforeEach(() => {
    cy.session("mySession", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`)
      cy.get("#userName").type("test")
      cy.get("#password").type("Test1234*")
      cy.get("#login").click()
      cy.url().should("contain", "profile")
    });
  });

  it("check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`)
  });

  it("check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`)
  });
})
