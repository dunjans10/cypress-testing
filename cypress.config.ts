import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout:60000,
    //defaultCommandTimeout:16000
  },
  env:{
    exampleVar:"Hello from the Cypress.config.ts"
  }
});
