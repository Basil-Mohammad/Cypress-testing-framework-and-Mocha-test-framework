/// <reference types ="Cypress"/>
beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
    cy.log('cach and cookies cleared');
    cy.reload();
});
describe('Login', () => {
    it('login standard_user', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
    });

    it('to add all items to the cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        let myArray = cy.get('div #inventory_container .btn')

        myArray.each(($el) => {
            cy.wrap($el).click(); // Perform an action on each element
          });
        
    });

    it('to add item and skip another', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('div #inventory_container .btn').each(($el, index) => {
            if (index % 2 === 0) {
              // Click on elements with even index
              cy.wrap($el).click();
            }
          });
          
        
    });
    
});