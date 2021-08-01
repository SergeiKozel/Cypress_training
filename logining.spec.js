/// <reference types="Cypress" />

context('Startup', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should fill login form and redirect to homepage', () => {

        // Fill the username
        cy.get('[data-cy="username"]')
            .type('bhaidar')
            .should('have.value', 'bhaidar');

        // Fill the password
        cy.get('[data-cy="password"]')
            .type('123$567')
            .should('have.value', '123$567');

        // Locate and submit the form
        cy.get('login-form').submit();

        // Verify the app redirected you to the homepage
        cy.location('pathname', { timeout: 10000 }).should('eq', '/');

        // Verify the page title is "Home"
        cy.title().should('eq', 'Home');

    });

});