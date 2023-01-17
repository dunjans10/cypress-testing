describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/classattr")
  });

  it("find an element by xpath", () => {
    cy.xpath(`//*[text()='Correct variant is']`).should('contain.text', "Correct")
  });

  it("find an element by its attribute using xpath", () => {
    cy.xpath(`//pre[@class=' language-html']`).should('contain.text', "button")
  });

  it("find by class (middle and spaces)", () => {
    cy.xpath(`//button[contains(concat(' ', @class, ' '), 'btn-primary')]`).should("have.css", "background-color", "rgb(0, 123, 255)")
  });

})