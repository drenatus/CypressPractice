/* global Given, Then, When */
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import MainPage from '../actions/Actions'

const mainPage = new MainPage


Then("acesso o site {}", (url) => {
    mainPage.openPage(url);
})

Then("digito no campo CEP o valor {}", (cep) => {
    mainPage.buscaCep(cep);
})


Then("clico no botão buscar CEP", () => {
    mainPage.clickCep();
})

Then("digito no campo Acompanhe seu objeto o número {}", (rast) => {
    mainPage.buscaRastreio(rast);
})

Then ("clico no botao buscar codigo de rastreio", () => {
    mainPage.clickRastreio();
})

Then ("vejo a mensagem {}", (msg) => {
    mainPage.checkMsg(msg);
})

Then ("clico no ícone Correios e volto a tela inicial", () => {
    mainPage.clickLogo();
})

Then ("vejo em logradouro o resultado {}", (logradouro) => {
    mainPage.checkLogradouro(logradouro);
})

Then ("vejo em Localidade o resultado {}", (city) => {
    mainPage.checkCidade(city)
})    

Then ("clico no botao buscar codigo de rastreio da proxima pagina", () => {
    mainPage.clickRastreio2();
})

Then ("vejo na tela de rastreio a mensagem {}", (msgrast) => {
    mainPage.checkRastreio(msgrast)
})



Then ("tiro um print da tela", () => {
    mainPage.screenshot()
})