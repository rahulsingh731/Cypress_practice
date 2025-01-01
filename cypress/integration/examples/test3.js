///reference types="cypress" />
///reference types="cypress-iframe" />
import 'cypress-iframe';


describe('Testing the Website', () => {
    it('Visit the Website', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                });
            }
        });
        // cy.get("#gf-BIG.footer_style a").each($el => {
        //     const href = $el.attr('href');
        //     cy.request(href).then((response) => {
        //         if((response.status).to.eq(200)==true){
        //             cy.log('Link is working');
        //         }
        //         else{
        //             cy.log('Link is not working');
        //         }
        //     });
        // });
        cy.get(".mouse-hover-content").invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
        cy.go('back');


        cy.get('#opentab').then(function(el) {
            const url = el.prop('href');
            cy.request(url).then((response) => {
                expect(response.status).to.eq(200);
                cy.visit(url);
                cy.origin(url,()=>
                {
                    cy.title('eq','QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy'); 

                }
                );
                
            });
            
        });

    });
});