import { page } from 'har-validator'
import {pageElements} from '../elements/Elements'
require('@cypress/xpath')


class mainPage {
  
    // Login Page

    openPage(url) {
        cy.visit(url, { timeout: 180000 })
        cy.viewport(1600, 900)
        cy.wait(2000)
    }


    buscaCep(cep) {
        cy.xpath(pageElements.cardCep).should('be.visible')
        .first()
        .invoke("removeAttr", "target")
        cy.get(pageElements.campocep).should('be.visible').type(cep)
    }

    clickCep() {
        cy.xpath(pageElements.botaocep).should('be.visible') 
        .click({ force: true });
    }

    buscaRastreio(cod) {
        cy.xpath(pageElements.cardRastreio).should('be.visible')
        .first()
        .invoke("removeAttr", "target")
        cy.get(pageElements.campoRast).should('be.visible').type(cod)
    }

    clickRastreio() {
        cy.xpath(pageElements.botaoRast).should('be.visible').click()
    }

    clickRastreio2() {
        cy.get(pageElements.botaoRast2).should('be.visible').click()
    }

    checkRastreio(msgrast) {
        cy.get(pageElements.checkRast).should('contain', msgrast) 
    }

    checkMsg(msg) {
        cy.xpath(pageElements.msgCep).should('contain', msg)
    }

    clickLogo() {
        cy.get(pageElements.logo).should('be.visible').click()
    }

    checkLogradouro(log) {
        cy.xpath(pageElements.logradouro).should('contain',log)
    }

    checkCidade(city) {
        cy.xpath(pageElements.cidade).should('contain', city)
    }

    screenshot(){
        cy.screenshot()
    }    

}



export default mainPage;


Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })