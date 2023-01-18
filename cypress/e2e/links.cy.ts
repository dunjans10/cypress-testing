describe("Example of links (Cypress trade-offs:Never support for multiple browser tabs)", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`)
  });

  it("First approach, not click on the link", () => {
    cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com")
    cy.get("#simpleLink").should("have.attr", "target", "_blank")
  });

  it("Second approach, remove the target", () => {
    cy.get("#simpleLink").invoke('removeAttr', 'target').click()
    cy.url().then((url) => {
      expect(url).to.be.equal("https://demoqa.com/")
    })
  });
});

describe("Spying an API request after clicking a link(button)", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`)
    cy.intercept("GET", `${Cypress.env("demoQA")}/created`).as("linkStatus")
  });

  it("example requst", () => {
    cy.get("a#created").click()
    cy.wait("@linkStatus").then((request) => {
      cy.log("This is the request intercepted", request)
      expect(request.response.statusCode).to.be.equal(201)
      expect(request.response.statusMessage).to.be.equal("Created")
    })
  })
})

