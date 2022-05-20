describe('app-a', { tags: '@a' }, () => {
    it(`navigates to correct URL ${Cypress.env('URL_TEST')}`, () => {
      cy.visit(Cypress.env('URL_TEST'))
    })
  })
  