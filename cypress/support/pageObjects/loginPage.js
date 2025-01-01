class LoginPage {
    goToLoginPage(url){
        cy.visit(url);
    }


    login(username,password){
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('#terms').check({ force: true });
        cy.contains("Sign In").click();
    }
}

export default LoginPage;