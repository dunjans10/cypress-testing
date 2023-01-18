describe("Clicks example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/buttons`)
  });

  it("double click test", () => {
    cy.get("#doubleClickBtn").dblclick()
    cy.get("#doubleClickMessage").should("have.text", "You have done a double click")
  });

  it("right click test", () => {
    cy.get("#rightClickBtn").rightclick()
    cy.get("#rightClickMessage").should("have.text", "You have done a right click")
  });

})
