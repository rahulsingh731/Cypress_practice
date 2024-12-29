/// <reference types="cypress" />

describe('Testing the Website', () => {
    xit('Visit the Website', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.url().should('include', 'magento.softwaretestingboard.com');
        cy.title().should('eq', 'Home Page');
});
xit('Create an Account if it did not exist', () => {  
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get( 'header[class="page-header"] li:nth-child(3) a:nth-child(1)').should('have.text', 'Create an Account').click();
    cy.wait(1000);
    cy.get('input[name="firstname"]').type('Bear');
    cy.get('input[name="lastname"]').type('Grylls');
    cy.get('input[name="email"]').type('bear_grylls@abc.com');
    cy.get('#password').type('Bear@123');
    cy.get('#password-confirmation').type('Bear@123');
    cy.get('button[title*="Create"]').click();
    cy.get('.message-success > div').should('have.text', 'Thank you for registering with Main Website Store.');
    });

it('Login to the Website', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    // cy.get('.panel > .header > .authorization-link > a').click();
    // cy.wait(1000);
    // cy.get('input[name="login[username]"]').type('bear_grylls@abc.com');
    // cy.get('input[name="login[password]"]').type('Bear@123');
    // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    // cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Bear Grylls!');
    // cy.wait(1000);
    cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover').get('#ui-id-17').trigger('mouseover').wait(1000).get('#ui-id-19').click();
    cy.get(':nth-child(3) > .toolbar-sorter > #sorter').select('Price').should('have.value', 'price');
    cy.get(':nth-child(4) > .filter-options-title').click();
    cy.get('[href="https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html?color=49&product_list_order=price"] > .swatch-option').click();
    cy.get('span.filter-value').should('have.text', 'Black');
    cy.get('.product-items>li').should('have.length', 6);
    

});
});