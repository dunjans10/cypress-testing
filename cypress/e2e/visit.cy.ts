describe("Basics - visit", () => {
  beforeEach(() => {
    cy.visit("/textinput")
  })
  it("visit page text input", () => {
    cy.url().then((url) => {
      cy.log("Printing the URL: " + url)
    })
  
  });
  it("visit page text input", () => {
    cy.log("Hello from it")
   });
})