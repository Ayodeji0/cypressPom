
class Login {

    autousername ='#Username';
    autopassword = '#Password';
    autopractice = '#PracticeRefNumber';
    clickbtn = '.MuiButton-label';
    verification = "p[class='MuiTypography-root jss323 MuiTypography-body1']";

    setUserName(username){
        cy.get(this.autousername).type(username);
    }

    setPassword(password){
        cy.get(this.autopassword).type(password);
    }

    setPracticeId(practiceid ){
        cy.get(this.autopractice).type(practiceid);
    }

    clickLogin(){
        cy.get(this.clickbtn).click();
    }

   
    verifyLogin(){
        
        cy.get(this.verification).should('have.text','Dr Oladeji Adebayyo');
    }



    // cy.get(this.verification, { timeout: 4000 }).should('be.visible').should('have.text', 'Dr Oladeji Adebayyo');

}
export default Login