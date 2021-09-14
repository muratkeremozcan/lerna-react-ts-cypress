describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.get('.App-header').should('be.visible');
    cy.contains('p', 'app-c');
  })
})
