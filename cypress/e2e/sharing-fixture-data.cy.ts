import { testData } from "./model";

describe("Sharing my fixture", () => {
  beforeEach(() => {
    cy.fixture("jsonExample").as("testData")
  });

  it("Accesing the shared fixture #1", () => {
    cy.get<testData>("@testData").then((data) => {
      cy.log("object", data)
      cy.log("object property", data.property1)
    })
  });

  it("Accesing the shared fixture #2", () => {
    cy.get<testData>("@testData").then((data) => {
      cy.log("object", data)
      cy.log("object property", data.property2)
    })
  });
})