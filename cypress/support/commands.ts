import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      login: () => void;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.origin(Cypress.env("SSO_URL"), () => {
    cy.get("label").contains("Username");
    cy.get("label").contains("Password");

    cy.get("#username").type(Cypress.env("SSO_USERNAME"));
    cy.get("#password").type(Cypress.env("SSO_PASSWORD"), { log: false });
    cy.get("#kc-login").click();
  });
  cy.get("app-header .fr-header__service-title").contains("New app -");
});
