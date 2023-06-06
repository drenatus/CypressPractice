Feature: Teste Correios

Background:
    Given acesso o site https://www.correios.com.br/

 
    Scenario: Buscar Cep e Código de Rastreio 
 
    Given digito no campo CEP o valor 80700000
    And clico no botão buscar CEP
    And vejo a mensagem Dados não encontrado
    And clico no ícone Correios e volto a tela inicial
    And digito no campo CEP o valor 01013001
    And clico no botão buscar CEP
    And vejo em logradouro o resultado Rua Quinze de Novembro - lado ímpar
    And vejo em Localidade o resultado São Paulo/SP
    And clico no ícone Correios e volto a tela inicial
    And digito no campo Acompanhe seu objeto o número SS987654321BR
    And clico no botao buscar codigo de rastreio
    And clico no botao buscar codigo de rastreio da proxima pagina
    Then vejo na tela de rastreio a mensagem Preencha o campo captcha
    Then tiro um print da tela




