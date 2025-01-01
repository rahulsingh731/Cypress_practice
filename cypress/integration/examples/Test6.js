/// <reference types="cypress" />

import LoginPage from '../../support/pageObjects/loginPage';
import ProductPage from '../../support/pageObjects/prodPage';


describe('End to End Ecommerce Test', () => {
    before(function(){
        //run once before all the tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    })


    it('Buy Products', function() {

        const loginpage = new LoginPage();
        const prodPage = new ProductPage();

        loginpage.goToLoginPage(Cypress.env('url')+ "/loginpagePractise/#/");
        loginpage.login(this.data.username, this.data.password);
        
        prodPage.pageValidation();
        prodPage.verifyNumCard();
        
        this.data.productName.forEach(element => {
            prodPage.filterProduct(element);
        });
        
        const cartPage = prodPage.checkout();
        cartPage.getSum().then(function(sum){
            expect(sum).to.be.lessThan(200000);
        });

        //Check if total sum is not exceeding more than Rs.200000
        
        cy.get('button').contains('Checkout').click();
        cy.get('#country').type('India');
        
        cy.get('.suggestions ul li a:nth-child(1)').click();
        cy.contains('Purchase').click();
        cy.get('div.alert-success').should('contain', 'Success');

    });
});
