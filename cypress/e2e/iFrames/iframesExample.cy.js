// First we have to locate the id of the frame
// Then we use the command to find within the body of the iframe the selector of the element we want to find
// Finally we create a validation to see if the response is correct

describe('Working with iFrames', () => {
    it('Handle a iFrame', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame')
        .iframe('body #button-find-out-more > b')
        .should('include.text','Find Out More')
    })
})