describe("Checkbox example", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/checkbox`)
  });

  it("checkbox scenario", () => {
    cy.get('input[type="checkbox"]').click({force:true})
    cy.get("#result").should("have.text", "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile")
  });
});

describe("The internet app - checkbox", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/checkboxes`)
  });

  it("checkbox scenario", () => {
    cy.get("form#checkboxes input").eq(0).click().should("be.checked")
  })
})

