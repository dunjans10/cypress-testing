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

//array of objects applied to a test scenario

describe.only("Array of objects-Users", () => {
  it("Getting the information based on my fixture", () => {
    cy.fixture<{users:User[]}>("example.json").its("users").then((users) => {
      //cy.log(users)
      users.forEach(user => {
        cy.visit(`${Cypress.env("demoQA")}/login`)
        cy.login(user.username, user.password)
        if(user.valid){
          cy.url().should("contain", "profile")
        }else{
          cy.url().should("contain", "login")
        }
        cy.clearCookies()
        cy.clearLocalStorage()
      })
    })
  })
})
