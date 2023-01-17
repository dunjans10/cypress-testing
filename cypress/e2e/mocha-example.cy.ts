describe("empty spec", () => {
  before(() => {
    cy.log("Hello from the before hook")
  });
  after(() => {
    cy.log("Hello from the after hook")
  });
  it("testcase#1", () => {
    cy.log("Hello from test case #1")
  });
  it("testcase#2", () => {
    cy.log("Hello from test case #2")
  });
  it("testcase#3", () => {
    cy.log("Hello from test case #3")
  });

})