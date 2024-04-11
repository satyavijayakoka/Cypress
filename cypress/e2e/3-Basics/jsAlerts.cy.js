/// <reference types="cypress" />

// js alert , we cannot inspect
//window.alert()
//window.confirm()
//window.prompt()

describe('manage js alerts',function(){
    this.beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('windo:alert',function(text){
        cy.on('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
        return true

        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
        
    })

    it('window:confirm - ok click',function(){
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('window:confirm - ok cancel',function(){
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    it.only('window:prompt',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('hello i am learning cypress')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('contain','hello i am learning cypress')

        })
    })
})







