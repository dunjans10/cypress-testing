let img:HTMLImageElement;

describe("Broken inages example", () => {
  beforeEach(()=> {
    cy.visit(`${Cypress.env("demoQA")}/broken`)
  });

  it("not broken image assertion", () => {
    cy.get("div>img[src='/images/Toolsqa.jpg']").should("be.visible").and(($img) => {
      img=$img[0] as unknown as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0)
    })
  });

  it("broken image assertion", () => {
    cy.get("div>img[src='/images/Toolsqa_1.jpg']").should("be.visible").and(($img) => {
      img=$img[0] as unknown as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0)
    })
  });
})



