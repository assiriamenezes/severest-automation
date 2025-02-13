describe('POST/login', () => {
    
    it('Scenario 1: Login with valid credentials', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: 'fulano@qa.com',
          password: 'teste'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Login realizado com sucesso');
        expect(response.body).to.have.property('authorization');
      });
    });

    it('Scenario 2: Login with invalid e-mail', () => {
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/login',
          body: {
            email: 'invalidemail@test.com',
            password: 'teste'
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
        });
      });

    it('Scenario 3: Login with invalid password', () => {
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/login',
          body: {
            email: 'fulano@qa.com',
            password: 'invalid'
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
        });
      });
  });