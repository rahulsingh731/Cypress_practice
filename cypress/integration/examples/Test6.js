///reference types="cypress" />

describe('End to End Ecommerce Test', () => {
    it('Buy Products', () => {

        const list_items = ['Blackberry', 'Nokia Edge'];
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/")
        cy.get('input[name="username"]').type('rahulshettyacademy');
        cy.get('input[name="password"]').type('learning');
        cy.get('#terms').check({ force: true });
        cy.contains("Sign In").click();
        cy.contains("Shop Name").should('be.visible');
        cy.get('app-card').should('have.length', 4);
        cy.get('app-card').filter(`:contains(${list_items[0]})`).then($element => {
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).find('button', 'Add').click();
        });
        cy.get('app-card').filter(`:contains(${list_items[1]})`).then($element => {
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).find('button', 'Add').click();
        });
        cy.contains('Checkout').click();

        //Check if total sum is not exceeding more than Rs.200000
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each($e1 => {
            var amount = Number($e1.text().split(" ")[1].trim());
            console.log(amount);
            sum += amount;
        }).then(function () {
            expect(sum).to.lessThan(200000)
        });
        cy.get('button').contains('Checkout').click();
        cy.get('#country').type('India');
        // cy.wait(2000);
        cy.get('.suggestions ul li a:nth-child(1)',{timeout:10000}).click();
        cy.contains('Purchase').click();
        cy.get('div.alert-success').should('contain', 'Success');

    });
});
