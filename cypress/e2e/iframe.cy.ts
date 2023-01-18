describe.skip("Iframe example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/nestedframes`)
  });

  it("simple and nested iframe", () => {
    cy.get("#frame1").then(function($frame){
      const $body = $frame.contents().find("body")
      cy.wrap($body).should("have.text", "Parent frame")
      cy.wrap($body).find('iframe').then(function($childframe){
        const $childBody = $childframe.contents().find("body")
        cy.wrap($childBody).find("p").should("have.text", "Child Iframe")
      })
    })
  })
})

describe("Typing on an iframe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/iframe`)
  });

  it("iframe example", () => {
    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body")
      cy.wrap($body).find("p").type("{selectAll}{del}Hello world")
    });

    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body")
      cy.wrap($body).find("p").should("have.text", "Hello world")
    })
  })
})

