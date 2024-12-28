/// <reference types="cypress" />

describe('Homepage', () => {
  it('should load successfully', () => {
    // Visit the homepage
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.get('.products').find('.product').each(($el) => {
      const textVeg = $el.find('.product-name').text();
      if (textVeg.includes('Capsicum')) {
        cy.wrap($el).find('button').click();
      }
    });

    // Log the brand name
    cy.get('.brand').then((logoElement) => {
      cy.log(logoElement.text());
    });

    cy.get('.search-keyword').clear().type('cucu');
    cy.get('.product > .product-name').should('have.text', 'Cucumber - 1 Kg');
    cy.get('.cart-icon > img').click();
  });
});
