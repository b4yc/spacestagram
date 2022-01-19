import cypress from "cypress";

export class SpacestagramPage {
  public elems: { [key: string]: string } = {
    logo: '[data-testid="logo"]',
    errorStatePage: '[data-testid="error-state-page"]',
  };
  visit() {
    cy.visit("http://localhost:3000");
  }
}
