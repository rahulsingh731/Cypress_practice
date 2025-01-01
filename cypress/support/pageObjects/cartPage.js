import CheckPage from './checkPage.js';
class CartPage {
    getSum() {
        let sum = 0;

        // Return a Cypress chainable
        return cy.get('tr td:nth-child(4) strong').each(($el) => {
            const amount = Number($el.text().split(" ")[1].trim());
            sum += amount;
        }).then(() => {
            return sum; // Return the calculated sum
        });
    }

    checkout() {
        cy.get('button').contains('Checkout').click();
        return new CheckPage();
    }
}

export default CartPage;
