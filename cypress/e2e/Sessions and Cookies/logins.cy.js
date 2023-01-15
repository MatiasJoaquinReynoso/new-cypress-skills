
describe('Logins',() => {

    it('No data login saved', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
    })
    it('Data login saved', () => {
        cy.session('Tom', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        })
    })
})

// on json document:
//{
//"experimentalSessionAndOrigin": true,
//"experimentalSessionSupport": true
//}