describe("Dynamic table example", () => {
  beforeEach(() => {
    cy.visit("/dynamictable")
  });

  it.skip("Chrome row test", () => {
    cy.get(`div[role="row"] span`).each(($cell) => {
      //cy.log($cell.text())

      if($cell.text().includes('Chrome')){
        cy.log($cell.text());
        cy.log(`I have found the ${$cell.text()} row`)
      }
    })
  });

  it("Chrome CPU test", () => {
    cy.get(`div[role="row"] span`).each(($cell) => {
      if($cell.text().includes('Chrome')){
        cy.log(`I have found the ${$cell.text()} row`)

        let chromeRowValues:string[] = [];
        chromeRowValues.push($cell.next().text())
        chromeRowValues.push($cell.next().next().text())
        chromeRowValues.push($cell.next().next().next().text())
        chromeRowValues.push($cell.next().next().next().next().text())

        chromeRowValues.forEach((chromeValue) => {
          if(chromeValue.includes("%")){
            cy.log(chromeValue);
            cy.get(".bg-warning").should("have.text" , `Chrome CPU: ${chromeValue}`);
          }
        });
      }
    });
  });
});
