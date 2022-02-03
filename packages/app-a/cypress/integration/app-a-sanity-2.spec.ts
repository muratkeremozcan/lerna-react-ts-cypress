describe('sanity 2', { tags: '@a2' }, () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.contains('This is app-a.')
  })
})
