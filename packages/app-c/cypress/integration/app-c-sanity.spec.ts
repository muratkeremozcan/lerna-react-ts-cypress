describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.contains('p', 'app-c');
  })
})
