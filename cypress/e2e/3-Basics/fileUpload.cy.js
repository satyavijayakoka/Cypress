///<reference types="cypress"/>
describe('verify the file upload in cypress',function(){

    it('verify the file upload in cypress',function(){
        cy.on('window:alert',function(str){
            expect(str).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('input[type="file"]').selectFile('//Users//madhuduggirala//Desktop//Cypress//cypress//fixtures//oops_notes.pdf')
        cy.get('input[type="submit"]').click()
        cy.url().should('contain','oops_notes')

    })
    it.only('verify the file upload in cypress',function(){
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
        let path1 = '//Users//madhuduggirala//Desktop//Cypress//cypress//fixtures//oops_notes.pdf'
        let path2 = '//Users//madhuduggirala//Desktop//Cypress//cypress//fixtures//String_notes.pdf'
        cy.get('input[type="file"]').first().selectFile([path1,path2])
        cy.get('#ember379').should('contain','2')
    })
   

})