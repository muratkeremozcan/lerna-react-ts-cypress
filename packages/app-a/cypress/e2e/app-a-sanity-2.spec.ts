/* eslint-disable jest/valid-describe-callback */
describe('grep test spec', { tags: '@2' }, () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.contains('This is app-a.')
  })
})
