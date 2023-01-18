describe("Drag and drop", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/droppable`)
  });

  it("drag and drop", () => {
    cy.get("#draggable").drag("#droppable", {force:true})
  })
})
