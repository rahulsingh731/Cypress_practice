/// <reference types="cypress" />

import LoginPage from '../../support/pageObjects/loginPage';

describe('End to End Ecommerce Test', () => {
    before(function () {
        // Run once before all the tests in the block to load the fixture data
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('Buy Products', function () {
        // Create an instance of the LoginPage
        const loginpage = new LoginPage();
        
        // Navigate to the login page
        loginpage.goToLoginPage(Cypress.env('url') + "/loginpagePractise/#/");
        
        // Perform login and navigate to the product page
        const prodPage = loginpage.login(this.data.username, this.data.password);

        // Verify the shop name is visible
        prodPage.checkShopname().should('be.visible');
        
        // Verify the number of product cards
        prodPage.getNumCards().should('have.length', 4);

        // Filter products based on the product names from the fixture data
        this.data.productName.forEach(element => {
            prodPage.filterProduct(element);
        });

        // Proceed to the cart page
        const cartPage = prodPage.checkout();
        
        // Check if the total sum is not exceeding more than Rs.200000
        cartPage.getSum().then((sum) => {
            cy.log(`Total sum: ${sum}`);
            expect(sum).to.be.lessThan(200000);
        });

        // Proceed to the checkout page
        const checkpage = cartPage.checkout();

        // Submit the final order
        checkpage.final_submit(this.data.country);
        
        // Verify the success message
        checkpage.getSuccessMessage().should('contain', 'Success');
    });
});
