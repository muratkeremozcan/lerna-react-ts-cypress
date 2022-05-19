describe('grep test spec', { tags: '@2' }, () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.contains('NOTHING')
  })
})
