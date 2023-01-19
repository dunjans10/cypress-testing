describe("API example basic", () => {

  it("GET request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      cy.log("response", response)
    });
  });

  it("POST request- post a new resource", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title:"title #101",
      body:"post #101",
      userID:101
    }).then((response) => {
      cy.log("response", response)
    });
  });

  it("PUT request - update resource", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id:1,
      title:"title update",
      body:"post update",
      userID:1
    }).then((response) => {
      cy.log("response", response)
    });
  });

  it("DELETE request", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      cy.log("response", response)
    });
  });

})
