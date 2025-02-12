describe('Login', () => {
    
    it('Scenario 1: login successfully', () => {
      cy.visit('/login');
      cy.get('#email').type('fulano@qa.com');
      cy.get('#password').type('teste');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/admin/home');
    });

    it('Scenario 2: Should display error message for empty fields', () => {
        cy.visit('/login');
        cy.get('button[type="submit"]').click();
        cy.contains('Email é obrigatório').should('be.visible'); 
        cy.contains('Password é obrigatório').should('be.visible');
      });

  });