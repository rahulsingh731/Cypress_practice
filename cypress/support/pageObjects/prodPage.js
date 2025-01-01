
import CartPage from './cartPage';

class ProductPage{

    checkShopname(){
        return cy.contains("Shop Name");
    }
    getNumCards(){
        return cy.get('app-card');
    }
    filterProduct(productName){
        cy.get('app-card').filter(`:contains(${productName})`).then($element => {
            // cy.wrap($element).should('have.length', 1);
            cy.wrap($element).find('button', 'Add').click();
        });
    }
    checkout(){
        cy.contains('Checkout').click();
        return new CartPage();
    }
}

export default ProductPage;