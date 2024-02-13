

describe("My Home page test with login", () => {


  beforeEach(() => {
    cy.task("queryFromFile", "cypress/database/purge_users.sql");
  });

  it("Should do a keycloak login flow and on success redirect to application", function () {
    cy.visit("/");
    cy.login();
  });
  
  it("Should register user CYPRESSNOM", function () {
    cy.visit("/");
    cy.login();
	
	cy.visit("/register");
	cy.get('input[name="nom"]').type("CYPRESSNOM");
    cy.get('input[name="prenom"]').type("CYPRESSPRENOM");
	
	cy.contains("button", "Submit").click();
  });
});
