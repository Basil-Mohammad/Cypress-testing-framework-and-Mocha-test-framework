beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
    cy.log('cach and cookies cleared');
    cy.reload();
});
describe('test the locked_out_user', () => {
    it('locked_out_user', () => {

        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("locked_out_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
    });
    
});