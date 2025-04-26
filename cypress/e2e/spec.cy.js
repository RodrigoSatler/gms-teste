/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Rodrigo')
    cy.get('#signup-lastname').type('satler')
    cy.get('#signup-email').type('rodrigo221@test.com')
    cy.get('#signup-phone').type('119993822')
    cy.get('#signup-password').type('Biorm2210#')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
})
})