// <reference type="Cypress" />

describe("Verify attributes", () => {
  it("Get URL application", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Should return Page title", () => {
    cy.title().should("Kitchen Sink");
  });
});
