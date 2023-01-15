// In this folder I made e2e buying a course from FreeRangeTesters web

describe('Home FreeRangeTesters',() => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })
    it('Should have a title', () => {
        cy.title().should('include', 'Aprender Testing')
    })
    it('Click on "Cursos" Button', () => {
        cy.get('#comp-l02x1m8d2label').click()
    })
    it('Pop Up Discount Code be visible', () => {
        cy.get('#comp-l02x1m8d2label').click()
        cy.wait(7000)
        cy.get('#bgLayers_comp-l4en5qib > [data-testid="colorUnderlay"]').should('be.visible')
    })
    it('Pop Up Discount Code Close', () => {
        cy.get('#comp-l02x1m8d2label').click()
        cy.wait(7000)
        cy.get('#bgLayers_comp-l4en5qib > [data-testid="colorUnderlay"]').should('be.visible')
        cy.wait(1000)
        cy.get('#comp-l4en5qj9 > div > svg > g > path').click()
    })
    it('Click on the first "Ver Curso" button', () => {
        cy.get('#comp-l02x1m8d2label').click()
        cy.wait(7000)
        cy.get('#bgLayers_comp-l4en5qib > [data-testid="colorUnderlay"]').should('be.visible')
        cy.wait(1000)
        cy.get('#comp-l4en5qj9 > div > svg > g > path').click()
        cy.wait(1000)
        cy.get('#comp-l8rsltg01 > [data-testid="linkElement"] > ._1Qjd7').click()
    })


})
