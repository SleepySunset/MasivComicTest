/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('Buttons behavior should be the expected when loading the page', () => {
      cy.wait(2000)
      cy.get('.comicbutton_container > :nth-child(3)').should("be.disabled")
      cy.get('.comicbutton_container > :nth-child(1)').should("be.enabled")
      cy.get('.comicbutton_container > :nth-child(2)').should("be.enabled")
      cy.get('.comicbutton_container > :nth-child(2)').click()
      cy.wait(2000)
      cy.get('.comicbutton_container > :nth-child(3)').should("be.enabled")
      cy.get(':nth-child(5) > .star > path').click()
      cy.get('p').should("be.visible")
      cy.get('p').should("have.text", "Tu calificación es de 5")
      cy.get(':nth-child(3) > .star > path').click()
      cy.get('p').should("have.text", "Tu calificación es de 3")
      cy.get('.comicbutton_container > :nth-child(1)').click()
      cy.wait(2000)
      cy.get('p').should('not.exist');
      cy.get('.comicbutton_container > :nth-child(3)').click()
    });

    
});
