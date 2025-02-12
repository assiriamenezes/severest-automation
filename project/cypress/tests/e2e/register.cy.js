describe('Register', () => {
    
    it('Scenario 1: Successful registration without admin', () => {

        cy.visit('/cadastrarusuarios');
  
        cy.get('#nome').type('Fulano da Silva'); 
        cy.get('#email').type('fulanoo.silvaaa@example.com'); 
        cy.get('#password').type('SenhaSegura123'); 
  
        cy.get('button[type="submit"]').click();
  
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.url().should('include', '/home');
    });

    it('Scenario 2: Successful registration with admin', () => {

        cy.visit('/cadastrarusuarios');
    
        cy.get('#nome').type('Fulano da Silva'); 
        cy.get('#email').type('adminn.silva@example.com'); 
        cy.get('#password').type('SenhaSegura123'); 
        cy.get('input[name="administrador"]').check();
        cy.get('button[type="submit"]').click();
    
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.url().should('include', 'admin/home');
      });
  });