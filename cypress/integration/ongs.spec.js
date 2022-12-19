/// <reference types="cypress" />

describe("Ongs", () => {
    it("Devem poder realizar um cadastro", () =>{
        cy.visit("http://localhost:3000/register");
        // cy.get - busca um elemento
        // .type - insere um texto
        cy.get("[data-cy=name]").type("Dogs Queridos");
        cy.get("[data-cy=email]").type("dogs@mail.com");
        cy.get("[data-cy=whatsapp]").type("87999999999");
        cy.get("[data-cy=city]").type("Petrolina");
        cy.get("[data-cy=uf]").type("PE");

        // routing
        // start server com cy.server()
        // criar uma rota com cy.route()
        // atribuir rota a um alias
        // esperar com cy.wait() e fazer uma validação

        cy.server();
        cy.route("POST", "**/ongs").as("postOng");


        cy.get("[data-cy=submit]").click();

        cy.wait("@postOng").then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response).has.property("id");
            expect(xhr.response.body.id).is.not.null;
        })
    });

    it("Devem poder realizar um login no sistema", () =>{

    });
});