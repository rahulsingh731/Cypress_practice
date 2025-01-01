/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Testing the Website', () => {
    it('Visit the Website', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find('ul.navigation.clearfix li a[href*="learning-path"].new-navbar-highlighter').click();
    // cy.iframe().find('h1').should('have.text', 'Learning Path');
    cy.log("Test Passed");
    // cy.iframe().find("div.card-content h4").each(($el, index, $list) => {
    //     const text = $el.text();
    //     if (text.includes('Software Quality Assurance Engineer')) {
    //         cy.log("Element present");
    //     }
    // });

    });

});