
describe('Example Fixtures',() => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('credentials').then(function(testdata){
            this.testdata = testdata
        })
    })
    it('Validate Successful Login', () => {
        cy.get('#username').type(this.testdata.username)
        cy.get('#password').type(this.testdata.password)
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
    })

})