import ProductPage from './prodPage.js';

class LoginPage {
    // Method to navigate to the login page
    goToLoginPage(url){
        cy.visit(url);
    }

    // Method to perform login action
    login(username, password){
        cy.get('input[name="username"]').type(username); // Enter username
        cy.get('input[name="password"]').type(password); // Enter password
        cy.get('#terms').check({ force: true }); // Check the terms and conditions checkbox
        cy.contains("Sign In").click(); // Click the Sign In button
        return new ProductPage(); // Return an instance of ProductPage
    }
}

export default LoginPage;