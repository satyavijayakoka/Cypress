/// <reference types="cypress" />
describe('verify the action commands',function(){
    it('verify the drag and drop operation ',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{ which:1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true});
        cy.get('#droppable p').should('have.text', 'Dropped!');
    })
})