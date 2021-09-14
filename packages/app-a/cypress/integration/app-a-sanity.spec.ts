describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.get('.App-header').should('be.visible');
    cy.get('p').should('be.visible');
    cy.contains('This is app-a');
  })
})
