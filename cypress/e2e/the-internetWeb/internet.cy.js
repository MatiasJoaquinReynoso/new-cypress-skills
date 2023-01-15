// Here i will practice with the-internet web
// The goal is use this web for apply all the knowledge from cypress course

describe('UI testing',() => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('Wait example', () => {
        cy.wait(2000)
        cy.contains("Challenging DOM").click()
    })
    it('New Window and Remove attribute', () => {
        cy.contains("Multiple Windows").click()
        cy.contains("Click Here").invoke('removeAttr', 'target').click()
        cy.contains("New Window").should('have.text', 'New Window')
    })
    it('Select elements with dynamic ID', () => {
        cy.contains("Dynamic Content").click()
        cy.get('img').should('be.visible')
    })
    it('Select first element with dynamic ID', () => {
        cy.contains("Dynamic Content").click()
        cy.get('img').first().should('be.visible')
    })
    it('Select last element with dynamic ID', () => {
        cy.contains("Dynamic Content").click()
        cy.get('img').last().should('be.visible')
    })
    it('Select second element with dynamic ID', () => {
        cy.contains("Dynamic Content").click()
        cy.get('img').eq(2).should('be.visible')
    })
    it('Example complete form', () => {
        cy.contains("Form Authentication").click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
    })
    it('Checkboxes', () => {
        cy.contains("Checkboxes").click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()
    })
    it('Dropdown List Ex 1', () => {
        cy.contains("Dropdown").click()
        cy.get('#dropdown').select("Option 2")
    })
    it('Dropdown List Ex 2', () => {
        cy.contains("Dropdown").click()
        cy.get('#dropdown').select("1")
    })
    it('Hover element', () => {
        cy.contains("Hovers").click()
        cy.get('#content > div > div:nth-child(4) > div > a').click({force: true})
    })
    it('Show Hover element', () => {
        cy.contains("Hovers").click()
        cy.get('#content > div > div:nth-child(4) > div > a')
        .invoke('show')
        .should('exist')
    })
    it('Right Click', () => {
        cy.contains("Context Menu").click()
        cy.get('#hot-spot').rightclick()
        cy.on('window:alert', (alert)=>{
            expect(alert).to.equal('You selected a context menu')
        })
    })
})
