describe('POST/usuarios', () => {
    
    it('Scenario 1: Successful registration without admin', () => {
      const usuario = {
        nome: 'Fulano da Silva',
        email: `fulano.silva${Math.random()}@example.com`,
        password: 'Teste',
        administrador: 'false'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: usuario
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
      });
    });

    it('Scenario 2: Successful registration with admin', () => {
        const usuario = {
          nome: 'Fulano da Silva',
          email: `fulano.silva${Math.random()}@example.com`,
          password: 'Teste',
          administrador: 'true'
        };
    
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/usuarios',
          body: usuario
        }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
          expect(response.body).to.have.property('_id');
        });
      });

      
    it('Scenario 3: Register with e-mail in use', () => {
        const usuario = {
          nome: 'Fulano da Silva',
          email: 'fulano@qa.com',
          password: 'Teste',
          administrador: 'true'
        };
    
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/usuarios',
          body: usuario,
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('message', 'Este email já está sendo usado');
        });
      });
  });

