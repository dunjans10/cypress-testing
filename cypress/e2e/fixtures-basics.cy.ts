import { testData } from "./model";

describe("Using a fixture", () => {
  
  it("loading the file and display the data in the log", () => {
    cy.fixture("jsonExample").then((data:testData) => {
      cy.log("Print object", data)
      cy.log("Print object property", data.property1)
    })
  })
})
