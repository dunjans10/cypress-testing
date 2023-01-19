import { User } from "./model";

describe("Array of objects-Users", () => {
  it("Getting the information based on my fixture", () => {
    cy.fixture<{users:User[]}>("example.json").its("users").then((users) => {
      //cy.log(users)
      users.forEach(user => {
        cy.log(user.username)
        cy.log(user.password)
      })
    })
  })
})
