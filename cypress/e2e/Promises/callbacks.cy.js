describe('UI testing',() => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('Waiting promises be resolved', () => {
        let waited = false

        function waitOneSecond() {

        return new Cypress.Promise((resolve, reject) => {
            setTimeout( () => {
                waited = true
                resolve('foo')
            }, 1000)
        })
    }
    cy.wrap(null), then(() => {
        return waitOneSecond().then((str) => {
            expect(str).to.eq('foo')
            expect(waited).to.be.true
        })
    })
    })
})