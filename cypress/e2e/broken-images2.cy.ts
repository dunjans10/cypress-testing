let image:HTMLImageElement;

describe.only("Broken images", ()=> {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/broken_images`)
  });

  it("broken image detected (first)", () => {
    cy.get("div.example img").first().should("be.visible").and(($img) => {
      image=$img[0] as unknown as HTMLImageElement;
      expect(image.naturalWidth).to.be.greaterThan(0)
    })
  });

  it("broken image detected (last)", () => {
    cy.get("div.example img").last().should("be.visible").and(($img) => {
      image=$img[0] as unknown as HTMLImageElement;
      expect(image.naturalWidth).to.be.greaterThan(0)
    })
  })
})