describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/dynamicid")
  })

  it("cy.contains example (find elements in DOM, UI", () => {
    cy.contains("Button with Dynamic ID")
  });

  it("cy.get - for parent and cy.find - for children example", () => {
    cy.get("div").find("button").should("have.text", "Button with Dynamic ID")
  });

  it("css selector using attribute", () => {
    cy.get(`button[class="btn btn-primary"]`).should("have.text", "Button with Dynamic ID")
  })
})