describe("Upload a file example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`)
  });

  it("upload a file", () => {
    cy.get("input#uploadFile").attachFile("example.json")
    cy.get("p#uploadedFilePath").should("contain", "example.json")
  })
})
