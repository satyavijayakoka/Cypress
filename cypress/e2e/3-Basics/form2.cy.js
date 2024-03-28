/// <reference types="cypress" />

describe('verify the contact us form',function(){

    beforeEach(function(){
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })
    it('verify the heading of the contact us page',function(){
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')

    })
    it('verify the contact form with valid data',function(){
        cy.get('input[name="first_name"]').type("satya")
        cy.get('input[name="last_name"]').type("koka")
        cy.get('input[name="email"]').type("ammu.duggi123@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning cypress")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')

    })
    it('verify the contact form with invalid data',function(){
        cy.get('input[name="first_name"]').type("satya")
        cy.get('input[name="last_name"]').type("koka")
        cy.get('input[name="email"]').type("ammu.duggi123gmail.com")
        cy.get('textarea[name="message"]').type("I am learning cypress")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain',"Invalid")

    })
    it('verify the reset button functionality of the contact form',function(){
        cy.get('input[name="first_name"]').type("satya")
        cy.get('input[name="last_name"]').type("koka")
        cy.get('input[name="email"]').type("ammu.duggi123@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning cypress")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')

    })
})