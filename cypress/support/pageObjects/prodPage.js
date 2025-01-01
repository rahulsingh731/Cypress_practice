
import CartPage from './cartPage';

class ProductPage{

    pageValidation(){
        cy.contains("Shop Name").should('be.visible');
    }
    verifyNumCard(){
        cy.get('app-card').should('have.length', 4);
    }
    filterProduct(productName){
        cy.get('app-card').filter(`:contains(${productName})`).then($element => {
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).find('button', 'Add').click();
        });
    }
    checkout(){
        cy.contains('Checkout').click();
        return new CartPage();
    }
}

export default ProductPage;