
class Login {


    setUserName(username){
        cy.get('#Username').type(username);
    }

    setPassword(password){
        cy.get('#Password').type(password);
    }

    setPracticeId(practiceid ){
        cy.get('#PracticeRefNumber').type(practiceid);
    }

    clickLogin(){
        cy.get('.MuiButton-label').click();
    }

    verifyLogin(){
      
    cy.get("p[class='MuiTypography-root jss323 MuiTypography-body1']", { timeout: 10000 }).should('be.visible').and('have.text', 'Dr Oladeji Adebayyo');
    }
}
export default Login