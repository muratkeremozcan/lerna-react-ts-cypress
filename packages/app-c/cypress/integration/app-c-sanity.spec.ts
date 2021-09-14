describe('app-c', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.contains('This is app-c.');
  })
})
