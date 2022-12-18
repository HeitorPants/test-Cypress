/// <reference types="cypress" />

describe("Ongs", () => {
    it("Devem poder realizar um cadastro", () =>{
        cy.visit("http://localhost:3000/register")
        cy.get("[data-cy=name]").type("Dogs Queridos")
    });

    it("Devem poder realizar um login no sistema", () =>{

    });
});