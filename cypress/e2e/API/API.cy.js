describe('API test with Cypress', () => {
    // GET requests
    it('Endpoint "posts" will be response "200" status',() => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Endpoint "posts" have 100 length',() => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts')
        .its('body')
        .should('have.length', 100)
    })

    it('Test title from endpoint "posts/1"',() => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts/1')
        .its('body')
        .should('have.property', 'title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
    // POST request
    it('Testing method /post',() => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            "userId": 1,
            "id": 3,
            "title": "Gladiator",
            "body": "epic film"
        }).then((response) => {
            expect(response.body).to.have.property('title', 'Gladiator')
        })
    })
    // PUT request
    it('Testing method /put',() => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
            "title": "Rerum novarum",
        }).then((response) => {
            expect(response.body).to.have.property('title', 'Rerum novarum')
        })
    })
    // DELETE request
    it('Testing method /delete',() => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    })
})