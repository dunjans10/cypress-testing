describe("Environment Variable example", () => {
  it("Base example", () => {
    cy.log(`Printing Environment Variable Value: ${Cypress.env("exampleVar")}`)
  })
})
