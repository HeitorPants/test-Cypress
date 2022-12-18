/// <reference types="cypress" />

describe("Ongs", () => {
    it("deve poder realizar um cadastro", () => {
        //cy.get - busca um elemento
        //.type - insere um texto
        cy.get("[data-cy=name]").type("Dogs queridos")
    });

    it("deve poder realizar um login no sistem", () => {

    });
});

