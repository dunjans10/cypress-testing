describe("Basics - visit", () => {
  beforeEach(() => {
    cy.visit("/textinput")
  })
  it("visit page text input", () => {
   cy.log("Hello from it")
  });
  it("visit page text input", () => {
    cy.log("Hello from it")
   });
})