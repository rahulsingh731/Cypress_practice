/// <reference types="cypress" />

describe('Testing the Website', () => {
    it('Calender Test in Website', () => {

        const date ='31'
        const year = '2024'
        const month = '7'
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get(".react-date-picker button:nth-child(3)").click();
        cy.get(".react-calendar__navigation__label span").dblclick();
        cy.contains(year).click();
        cy.get('button.react-calendar__tile').eq(month-1).click();
        cy.get('abbr').contains(date).click();
        cy.wait(10000)
        cy.get('input.react-date-picker__inputGroup__input.react-date-picker__inputGroup__year').should('have.value', year);
        cy.get('input.react-date-picker__inputGroup__input.react-date-picker__inputGroup__month').should('have.value', month);
        cy.get('input.react-date-picker__inputGroup__input.react-date-picker__inputGroup__day').should('have.value', date);

    });
});