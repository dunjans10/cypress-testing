describe("Download a file example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`)
  });

  it("download the file", () => {
    cy.get("a#downloadButton").click()
    cy.verifyDownload("sampleFile.jpeg")
  })
})
