describe("Accordian example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/accordian`)
  });

  it("accordian validation example", () => {
    cy.get("#section2Heading").click()

    //checking if the first description is hidden correctly
    cy.get("#section1Heading").next().should("have.css", "display", "none")

    //checking if the second description is hidden correctly
    cy.get("#section2Heading").next().should("have.css", "display", "block").and("have.class", "show")
  })
})
