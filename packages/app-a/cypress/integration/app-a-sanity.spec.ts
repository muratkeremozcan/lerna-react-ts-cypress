describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.contains('This is app-a.');
    cy.log(Cypress.env('SECRET'));
    console.log(Cypress.env('SECRET'));

    cy.wrap(Cypress.env('SECRET')).should('equal', 'at app abc');
  })
})
