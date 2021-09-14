describe('app-b', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.contains('This is app-b.');
  })
})
