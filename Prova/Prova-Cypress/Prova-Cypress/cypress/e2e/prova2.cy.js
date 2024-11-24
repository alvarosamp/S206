it('Cadastro', () => {
  
  cy.visit('https://automationintesting.online/');
  cy.get('[data-testid="ContactName"]').type('Romulo')
  cy.get('[data-testid="ContactEmail"]').type('romulo@gmail.com') // Erro
  cy.get('[data-testid="ContactPhone"]').type('999999999999999')
  cy.get('[data-testid="ContactSubject"]').type('Booking')
  cy.get('[data-testid="ContactDescription"]').type('Quero reservar um quarto')
  cy.get('#submitContact').click();
  

  cy.contains('Thanks for getting in touch').should('be.visible');
});

it('Erro no Cadastro',()=>{

  cy.visit('https://automationintesting.online/');
  cy.get('[data-testid="ContactName"]').type('123141')//ERRO
  cy.get('[data-testid="ContactEmail"]').type(' ') // ERRO
  cy.get('[data-testid="ContactPhone"]').type('999999999999')
  cy.get('[data-testid="ContactSubject"]').type('Reserva')
  cy.get('[data-testid="ContactDescription"]').type('Quero reservar um quarto')
  cy.get('#submitContact').click();

  
});

//Função do cadastro
function preencherFormulario(nome, email, telefone, assunto, descricao) {
  cy.get('[data-testid="ContactName"]').type(nome);
  cy.get('[data-testid="ContactEmail"]').type(email);
  cy.get('[data-testid="ContactPhone"]').type(telefone);
  cy.get('[data-testid="ContactSubject"]').type(assunto);
  cy.get('[data-testid="ContactDescription"]').type(descricao);
  cy.get('#submitContact').click();
}


  it('Cadastro usando uma funcao chamado preencherFormulario', () => {
    cy.visit('https://automationintesting.online/');

    
    preencherFormulario(
      'Romulo',
      'romulo@gmail.com',
      '9999999999999',
      'Reserva',
      'Gostaria de reservar um quarto'
    );

    
  });