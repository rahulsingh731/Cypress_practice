class CartPage{

    getSum(){
        
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each($e1 => {
            var amount = Number($e1.text().split(" ")[1].trim());
            console.log(amount);
            sum += amount;
        }).then(function () {
                return sum
        });
    }
}
export default CartPage;