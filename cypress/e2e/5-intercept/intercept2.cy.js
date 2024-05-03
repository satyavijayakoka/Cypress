///<reference types="Cypress"/>

describe('verify GET,POST,UPDATE button', function () {
    it('verify GET button', function () {
        cy.intercept({
            method: "GET",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getButton')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getButton').then(function (res) {
            cy.log(res.response.body.body)
            cy.get('.network-comment').should('have.text', res.response.body.body)
        })
    })

    it('verify POST button', function () {
        cy.intercept({
            method: "POST",
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postButton')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postButton').then(function (res) {
            cy.log(res)
           // cy.log(res.response.statusCode)
            expect(res.response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('have.text', 'POST successful!')

        })

    })

    it('verify update button', function () {
        cy.intercept({
            method: "PUT",
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('updateButton')
        
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateButton').then(function(res){
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.statusMessage).to.eq("OK")
        })
    })


})














