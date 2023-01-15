
describe('Cookies',() => {

    it('get Cookies', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        cy.getCookies().should('have.length',5).then((cookies) => {
            expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
        })
    })
    it('get Cookie', () => {
        cy.session('Tom', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        cy.getCookie('optimizelyPendingLogEvents').should('exist')
        })
    })
    it('Clear All Cookies', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        cy.getCookies().should('have.length',5).then((cookies) => {
            expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
        })
        cy.clearCookies()
        cy.getCookies().should('have.length', 0)
    })
    it('Clear one Cookie', () => {
        cy.session('Tom', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        cy.getCookie('optimizelyPendingLogEvents').should('exist')
        cy.clearCookie('optimizelyPendingLogEvents')
        cy.getCookie('optimizelyPendingLogEvents').should('not.exist')
        })
    })
    it('Set Cookie', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        cy.getCookie('CookieDummy').should('not.exist')
        cy.setCookie('CookieDummy', 'Matias')
        cy.getCookie('CookieDummy').should('have.property', 'value', 'Matias')
    })
})