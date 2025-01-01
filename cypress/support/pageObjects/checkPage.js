class CheckPage{

    final_submit(country){
        cy.get('#country').type(country);
        cy.get('.suggestions ul li a:nth-child(1)').click();
        cy.contains('Purchase').click();
        
    }
    getSuccessMessage(){  
        return cy.get('div.alert-success');
    }
}

export default CheckPage;