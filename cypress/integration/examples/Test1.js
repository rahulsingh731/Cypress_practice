/// <reference types="cypress" />

describe('Homepage', () => {
  it('should load successfully', () => {
    // Visit the homepage
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.wait(2000);
    cy.get('.search-keyword').type('ca');
    // cy.get('.products > div').should('have.length', 4);
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    cy.wait(2000);
    cy.get('.search-keyword').clear();
    cy.get('.search-keyword').type('cucu');
    cy.wait(2000);
    cy.get('.product > .product-name').should('have.text', 'Cucumber - 1 Kg');

  });
});
