const { it } = require("mocha");

/// <reference = cypress>
describe("Testes na pagina demoblaze ", () => {
    it("Criando conta", () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#signin2').click()
        cy.get('#sign-username').type("2")
        cy.get('#sign-password').type("2")
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        cy.get('#login2').click()
        cy.get('#loginusername').type('2')
        cy.get('#loginpassword').type('2')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.active > .nav-link').should("be.visible")

    });
    it('Enviando email', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.get('#loginusername').type('2')
        cy.get('#loginpassword').type('2')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#recipient-email').type('ajuda@gmail.com')
        cy.get('#recipient-name').type('Voce')
        cy.get('#message-text').type('Me ajuda! Nao consigo deslogar')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get(':nth-child(2) > .nav-link').should("contain.text", "Contact")   
    })
    it("Adicionando produto no carrinho", () =>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.success > :nth-child(2)').should("contain.text", `Samsung galaxy s6`);

    })
    //Compra caso correto
    it('Compra certa', () =>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('alvaro')
        cy.get('#country').type('br')
        cy.get('#city').type('srs')
        cy.get('#card').type('32183297391')
        cy.get('#month').type('sep')
        cy.get('#year').type(1201)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should("contain.text", "Thank you for your purchase!")


        
    })

    //Compra caso falha
    it('Compra falha', () =>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('alvaro')
        cy.get('#country').type('br')
        cy.get('#city').type('srs')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#orderModal').should('be.visible');



        
    })
    it('Deletando produto', () =>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.success > :nth-child(4) > a').click()
        cy.get('.success > :nth-child(2)').should("be.visible")
        
    })
});
