/// <reference types="cypress" />
describe('traverse methods',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command',function(){
        cy.get('#milk').prevAll().should('have.length',2)
    })
    it('To get all previous sibling DOM elements within elements, use the .nextAll() command',function(){
         cy.get('#coffee').nextAll().should('have.length',4)
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.get('#coffee').siblings().should('have.length',4)
    })
    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text',"Warning")
    })
    it('',function(){
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })
    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.get('.disabled').parent().should('have.attr','class','traversal-button-states')
    })
    it.skip('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_me').find('input[name="first_name"]').type('satya')

    })
    it.only('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })
    it('To get all of the next sibling DOM elements within elements until another element, use the .prevUntil() command.',function(){
        cy.get('#sugar').prevUntil('#coffee').should('have.length','3')
        cy.get('#sugar').prevUntil('#coffee').should('be.greaterThan','2')
    })
    it.only('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.get('#milk').parents().should('have.class','thumbnail')
    })

})