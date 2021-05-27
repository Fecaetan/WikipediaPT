

 #Funcionalidade: Consulta
  #  Cenario: Consultar Ovo de Páscoa
   #   Dado que acesso a Wikipedia em Portugues
    #  Quando pesquiso por "Ovo de Páscoa"
     # Entao Exibe a expessao "Ovo de Páscoa" no titulo da guia





Feature: Consulta
  Scenario: Consultar Ovo de Páscoa
    Given que acesso a Wikipedia em Portugues
    When pesquiso por "Ovo de Páscoa"
    Then Exibe a expessao "Ovo de Páscoa" no titulo da guia