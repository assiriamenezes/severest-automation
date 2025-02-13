describe('Login', () => {
    
    beforeEach(() => {
      
      cy.visit('/login');
    });

    it('Scenario 1: Login with valid credentials', () => {

      cy.get('#email').type('fulano@qa.com');
      cy.get('#password').type('teste');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/admin/home');
    });

    it('Scenario 2: Login with blank obrigatory fields ', () => {

      cy.get('button[type="submit"]').click();
      cy.contains('Email é obrigatório').should('be.visible'); 
      cy.contains('Password é obrigatório').should('be.visible');
      });

    it('Scenario 3: Login with credentials invalid (password)', () => {

      cy.get('#email').type('fulano@qa.com');
      cy.get('#password').type('eee');
      cy.get('button[type="submit"]').click();
      cy.contains('Email e/ou senha inválidos').should('be.visible');
      });

    it('Scenario 4: Login with credentials invalid (e-mail)', () => {

      cy.get('#email').type('incorrect@qa.com');
      cy.get('#password').type('teste');
      cy.get('button[type="submit"]').click();
      cy.contains('Email e/ou senha inválidos').should('be.visible');
      });    

    it('Scenario 5: Access Register page', () => {

      cy.contains('Cadastre-se').click();
      cy.url().should('include', '/cadastrarusuarios'); 
      cy.contains('Cadastro').should('be.visible');
      });

    it('Scenario 6: Access Login page', () => {

      cy.contains('Login');
      cy.url().should('include', '/login'); 
      cy.contains('Login').should('be.visible');
      });
     
  });