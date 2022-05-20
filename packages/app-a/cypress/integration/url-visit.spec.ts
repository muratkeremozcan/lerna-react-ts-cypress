describe('app-a', { tags: '@a' }, () => {
    it('navigates to correct URL', () => {
      cy.visit(Cypress.env('URL_TEST'))
    })
  })
  