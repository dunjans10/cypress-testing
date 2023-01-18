import { defineConfig } from "cypress";
//verify download import
const {isFileExist, findFiles} = require("cy-verify-downloads")

export default defineConfig({
  e2e: {
    baseUrl:"http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {isFileExist, findFiles})
    },
    pageLoadTimeout:60000,
    viewportHeight:1000,
    viewportWidth:1400
    //defaultCommandTimeout:16000
  },
  env:{
    exampleVar:"Hello from the Cypress.config.ts",
    demoQA:"https://demoqa.com",
    theInternet:"https://the-internet.herokuapp.com",
    angular:"https://www.globalsqa.com/"
  }
});
