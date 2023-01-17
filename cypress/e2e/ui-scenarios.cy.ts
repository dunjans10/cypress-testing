describe.skip("Click - class validation and css", () => {
  beforeEach(() => {
    cy.visit("/click");
  });

  it("class assertion", () => {
    cy.get("#badButton").click().should("have.class", "btn-success")
  });

  it("background assertion", () => {
    cy.get("#badButton").click().should("have.css", "background-color", "rgb(40, 167, 69)")
  });
});

describe("Hover example", () => {
  beforeEach(() => {
    cy.visit("/mouseover")
  });

  it("hover with cypress workaround", () => {
    cy.get(".text-primary").trigger("mouseover")
  });

  it("hover with real hover elements", () => {
    cy.get(".text-primary").realHover()
  })
})
