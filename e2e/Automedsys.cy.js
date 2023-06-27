import LoginPage from "../PageObjects/LoginPage"

describe('Automedsys Test',()=>{

    // General Method
 it('Login',()=>{
  cy.visit('https://qa-ehrpm.automedsys.net/')
  cy.title().should('eq', 'Practice Manager - Automedsys')
  cy.xpath("//input[@id='Username']").type('my username')
  cy.xpath("//input[@id='Password']").type("my passwprd")
  cy.xpath("//input[@id='PracticeRefNumber']").type("envirnmentid")
  cy.xpath("//button[@type='submit']").click()

 })

//  With POM
 it.only('Login',()=>{
  cy.visit('https://qa-ehrpm.automedsys.net/')
  const logs = new LoginPage()
  logs.setUserName('')
  logs.setPassword('')
  logs.setPracticeId('')
  logs.clickLogin()
  logs.verifyLogin()
  
 })

})