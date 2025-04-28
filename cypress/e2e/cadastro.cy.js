/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
});

afterEach(() => {
  cy.screenshot()
});

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `rodrigo${Date.now()}@teste.com`
    cy.preencherCadastro('Rodrigo','Satler',email,'11945345720','Teste@12345')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')    
});

 it('Deve validar mensagem de erro com o campo nome inválido',()=> {
  cy.preencherCadastro('Rodrigo20','Satler','rodrigo@teste.com', '11945345720','Teste@12345')
  cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
});

})
