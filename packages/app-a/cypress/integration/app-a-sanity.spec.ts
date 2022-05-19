describe('app-a', { tags: '@a' }, () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.contains('NOTHING')
  })
})
