
// CMD FOR HANDLE A IFRAME

// First we create the command
// once created we chain the command to an element (child)
// after obtain a cy.get (which will be the iframe). For that we are going to need the id of the iframe and the id of the selector that we want to look for inside it.
// we indicate the name of the command so that it is written in the runner and that returns the iframe object
// then we indicate the return that returns the object as a promise and we indicate how it will be returned

Cypress.Commands.add('iframe',{prevSubject:'element'},($iframe,selector) => {
    Cypress.log({
        name:'iframe',
        consoleProps(){
            return{
                iframe:$iframe,
            }
        }
    })
    return new Cypress.Promise(resolve=>{
        resolve($iframe.contents().find(selector))
    })
})

// CMD FOR LOGIN
Cypress.Commands.add('login',() => {
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
})
