describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.contains('app-a');
  })
})
