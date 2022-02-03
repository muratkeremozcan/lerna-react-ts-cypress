describe('app-c', { tags: 'c' }, () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.contains('This is app-c.')
  })
})
