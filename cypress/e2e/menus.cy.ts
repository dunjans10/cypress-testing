describe("Menu example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/menu`)
  });

  it("menu example", () => {
    cy.get("a").contains("Main Item 2").realHover()
    cy.contains("a", "SUB SUB LIST »").realHover()
  })
})
