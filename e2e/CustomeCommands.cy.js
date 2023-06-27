
describe('Commands',()=>{

    it('test it',()=>{
   cy.visit('https://demo.nopcommerce.com/')
   cy.wait(3000)
   cy.clickLink('APPLE MAcBook Pro 13-inch')
    })

    it.only('Login Command',()=>{
     cy.visit('https://demo.nopcommerce.com/')
     cy.clickLink('Log in')
    })
})