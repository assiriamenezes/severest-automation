describe('Register', () => {
    
    beforeEach(() => {
        
        cy.visit('/cadastrarusuarios');
        const number = Math.floor(Math.random() * 1000);
        Cypress.env('email', `fulano.silva${number}@example.com`);

      });

    it('Scenario 1: Successful registration without admin', () => {

        cy.get('#nome').type('Fulano da Silva'); 
        cy.get('#email').type(Cypress.env('email')); 
        cy.get('#password').type('Teste'); 
        cy.get('button[type="submit"]').click();
  
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.url().should('include', '/home');
    });

    it('Scenario 2: Successful registration with admin', () => {
    
        cy.get('#nome').type('Fulano da Silva'); 
        cy.get('#email').type(Cypress.env('email')); 
        cy.get('#password').type('Teste'); 
        cy.get('input[name="administrador"]').check();
        cy.get('button[type="submit"]').click();
    
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.url().should('include', 'admin/home');
      });

    it('Scenario 3: Register account with Name blank field', () => {
    
        cy.get('#email').type(Cypress.env('email')); 
        cy.get('#password').type('Teste');
        cy.get('button[type="submit"]').click();
    
        cy.contains('Nome é obrigatório').should('be.visible');
    
        cy.url().should('include', '/cadastrarusuarios');
      });

    it('Scenario 4: Register account with Password blank field', () => {
    
        cy.get('#nome').type('Fulano da Silva');
        cy.get('#email').type(Cypress.env('email')); 
        cy.get('button[type="submit"]').click();
    
        cy.contains('Password é obrigatório').should('be.visible');
    
        cy.url().should('include', '/cadastrarusuarios');
      });

    
    it('Scenario 5: Register account with E-mail in use', () => {
    
        cy.get('#nome').type('Fulano da Silva');
        cy.get('#email').type('fulano@qa.com');
        cy.get('#password').type('Teste');
        cy.get('button[type="submit"]').click();
    
        cy.contains('Este email já está sendo usado').should('be.visible');
    
        cy.url().should('include', '/cadastrarusuarios');
      });

    it('Scenario 6: Register account with E-mail blank field', () => {
    
        cy.get('#nome').type('Fulano da Silva');
        cy.get('#password').type('Teste');
        cy.get('button[type="submit"]').click();
    
        cy.contains('Email é obrigatório').should('be.visible');
    
        cy.url().should('include', '/cadastrarusuarios');
      });
    
    it('Scenario 7: Register account with invalid E-mail', () => {
    
        cy.get('#nome').type('Fulano da Silva');
        cy.get('#email').type('a@a')
        cy.get('#password').type('Teste');
        cy.get('button[type="submit"]').click();
    
        cy.contains('Email deve ser um email válido').should('be.visible');
    
        cy.url().should('include', '/cadastrarusuarios');
      });
  });
