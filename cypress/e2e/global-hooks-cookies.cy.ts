Cypress.session.clearAllSavedSessions();

describe("Global Hooks & Cookies", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`)
  });

  it("success login preserved", () => {
    cy.contains("#userName-value", "test")
  });
  it("success login preserved", () => {
    cy.contains("#userName-value", "test")
  });


  it("counting the cookies", () => {
    cy.getCookies().then((cookies) => {
      cy.log("cookies", cookies.length)
      //expect(cookies).to.have.length(11)
    })
  })
})