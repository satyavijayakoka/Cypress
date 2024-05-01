///<reference types ="cypress"/>

describe('intercept in cypress',function(){

    // it('testcase one',function(){
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.contains('Get Comment').click()
    //     cy.wait(2000)
    //     cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam voluptate ipsam ')

    // })


    it('testcase one',function(){

          cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
          }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(info){
            cy.log(info)
            expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam voluptate ipsam ')

        })

    })

    it('testcase two....',function(){

        cy.intercept({
          method:"GET",
          url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

      cy.visit('https://example.cypress.io/commands/network-requests')
      cy.contains('Get Comment').click()
      cy.wait('@getComment').then(function(info){
          cy.log(info)
          expect(info.response.statusCode).to.eq(200)
         //cy.get('.network-comment').should('be.visible')
         cy.get('.network-comment').should('have.text',info.response.body.body)

      })

  })

  it('testcase three ...',function(){
     let text = undefined
    cy.request({
        url:"https://jsonplaceholder.cypress.io/comments/1",
        method:"GET"
      })
      .then(function(info){
        text = info.body.body
      })
      .then(function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.get('.network-comment').should('have.text',text)
      })
  })
})



















