/// <reference types="cypress" />

// test scenario
describe('verify the login functionality',function(){

    // test case 1
    it('verify login with valid credentials',function(){
        // arrangement
        cy.visit("https://www.saucedemo.com/v1/")
        // actions
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
        // assertion
        cy.get('.app_logo').should('be.visible').and('have.attr','class')

    })

    // test case 2
    it('verify login with invalid credentials',function(){
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('#user-name').type("admin")
        cy.get('#password').type("admin123")
        cy.get('#login-button').click()
        cy.get('h3[data-test = "error"]').should('be.visible')


    })









})