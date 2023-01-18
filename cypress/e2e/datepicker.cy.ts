describe("Date picker", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/date-picker`)
  });

  it("date picker example", () => {
    cy.get("input#datePickerMonthYearInput").click()
    cy.get("select.react-datepicker__month-select").select("0")
    cy.get("select.react-datepicker__year-select").select("1900")
    cy.findByText("16").click()
    cy.get("input#datePickerMonthYearInput").should("have.value", "01/16/1900")
  })
})
