describe('Logins with Basic auth or Auth forms', () => {
    it('Login using auth method from Cypress package',() => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
        auth:{
            username:'admin',
            password:'admin'
        }
        })
        cy.get('p').should('include.text', 'Congratulations')
    })
    it('Login with credentials on url page',() => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations')
    })
    it('Login Form and request POST',() => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.request({
            method:'POST',
            url:'/authenticate',
            form:true,
            body:{
                username:'tomsmith',
                password:'SuperSecretPassword!'
            }
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
    it('The same test as above but with a login command',() => {
        cy.login()
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
})