/// <reference types="cypress" />

describe('Homepage', () => {
  it('should load successfully', () => {
    // Visit the homepage
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    
    // Alias for search input
    cy.get('.search-keyword').as('searchInput');
    
    // Alias for products container
    cy.get('.products').as('productsContainer');
    
    // Search for 'ca' and add Capsicum to cart
    cy.get('@searchInput').type('ca');
    cy.get('@productsContainer').find('.product').each(($el) => {
      const textVeg = $el.find('.product-name').text();
      if (textVeg.includes('Capsicum')) {
        cy.wrap($el).find('button').click();
      }
    });

    // Log the brand name
    cy.get('.brand').then((logoElement) => {
      cy.log(logoElement.text());
    });
    cy.get('.brand').should('have.text', 'GREENKART');
    
    // Search for 'cucu' and verify product name
    cy.get('@searchInput').clear().type('cucu');
    cy.get('.product > .product-name').should('have.text', 'Cucumber - 1 Kg');
    
    // Alias for cart icon
    cy.get('.cart-icon > img').as('cartIcon');
    
    // Add Carrot to cart
    cy.get('@cartIcon').click();
    cy.get('@searchInput').clear().type('carrot');
    cy.get('@productsContainer').find('.product').each(($el) => {
      const textVeg = $el.find('.product-name').text();
      if (textVeg.includes('Carrot')) {
        cy.wrap($el).find('button').click();
      }
    });
    cy.get('@cartIcon').click();
    
    // Proceed to checkout
    cy.contains('PROCEED TO CHECKOUT').click();
    
    // Apply promo code
    cy.get('.promoCode').type('rahulshettyacademy');
    cy.get('.promoBtn').click();
    cy.get('.promoInfo',{timeout:5000}).should('have.text', 'Code applied ..!');
    
    // Place order
    cy.contains('Place Order').click();
  });
});
