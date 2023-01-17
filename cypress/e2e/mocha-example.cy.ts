describe("empty spec", () => {
  before(() => {
    cy.log("Hello from the before hook")
  });
  after(() => {
    cy.log("Hello from the after hook")
  });
  beforeEach(() => {
    cy.log("Hello from the before each hook")
  });
  afterEach(() => {
    cy.log("Hello from the after each hook")
  });
  it("testcase#1", () => {
    cy.log("Hello from test case #1")
  });
  it.only("testcase#2", () => {
    cy.log("Hello from test case #2")
  });
  it.skip("testcase#3", () => {
    cy.log("Hello from test case #3")
  });

})