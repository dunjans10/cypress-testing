describe("Tooltips example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/tool-tips`)
  });

  it("tooltip button", () => {
    cy.get("#toolTipButton").realHover()
    //cy.get(`div[role="tooltip"]`)
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Button")
  });

  it("a tag tooltip", () => {
    cy.contains("a", "Contrary").realHover()
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Contrary")

  })
})
