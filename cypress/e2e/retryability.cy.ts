Cypress.config("defaultCommandTimeout", 16000)
describe('Retryability example', () => {
  it("visit with delay", () => {
    cy.visit("/loaddelay")
   // cy.visit("/loaddelay", {timeout:6000})
  });

  it("click delay button", () => {
    cy.visit("/clientdelay");
    cy.get("button.btn-primary").click();
    cy.get(".bg-success").should("have.text", "Data calculated on the client side.")
  });

  it("progress bar example", () => {
    cy.visit("/progressBar");
    cy.get("#startButton").click();
    cy.get("#progressBar", {timeout:30000}).should("have.text","100%")

  })
  
})
