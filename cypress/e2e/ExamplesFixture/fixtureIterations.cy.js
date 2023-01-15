const testData = require('../../fixtures/titles.json')

testData.forEach((testData) => {
    describe('Each link must have the correct title',() =>{
        it('Validate'+testData.Title + 'if is the correct title'+testData.Location + 'for each url', () => {
            cy.visit(testData.Location)
            cy.title().should('include', testData.Title)
        });
    });
})