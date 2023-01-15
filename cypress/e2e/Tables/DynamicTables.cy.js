describe('Example with dynamic tables',() => {
    it('Validate dynamic table with checkboxes', () => {
        cy.visit('https://chercher.tech/practice/dynamic-table')
        cy.contains('td', 'facebook.com')
        .prev()
        .find('input')
        .check()
    })
})