describe('app-a', { tags: '@a' }, () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.contains('This is app-a.')
  })
})
