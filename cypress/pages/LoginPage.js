class LoginPage {

    //função go
    go() {

        cy.visit('/')
        
    }
    //campo usuário
    usuario(usuario) {

        cy.get('input[id*=Username]').clear()
        .type(usuario)

    }
    //senha o clear é para limpar o campo antes de digitar o conteudo
    senha(senha) {
        cy.get('input[id*=Password]').clear().type(senha)

    }
    //botão entrar
    entrar() {
        cy.get('button[type="submit"]').click()

    }
    

    mensagemAlerta(expectedMessage) {
        cy.get('.ui-messages-error-detail')
            .should('have.text', expectedMessage)
    }

    sair() {
        //contem o id buttonSair
        cy.get('a[id*="buttonSair"]').click()
    }

    usuarioLogin(usuario){
        cy.contains('label[id*=iconUsr]', usuario).should('be.visible')
    }

    fazerLogin(usuario,senha){
    
        
        cy.get('input[id*=Username]').clear().type(usuario)
        cy.get('input[id*=Password]').clear().type(senha, { log: false })
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        cy.contains('label[id*=iconUsr]', usuario).should('be.visible')
    }





}

//Já exporta instanciado a classe 
export default new LoginPage;