$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 3,
      "value": "#Funcionalidade: Consulta"
    },
    {
      "line": 4,
      "value": "#  Cenario: Consultar Ovo de Páscoa"
    },
    {
      "line": 5,
      "value": "#   Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 6,
      "value": "#  Quando pesquiso por \"Ovo de Páscoa\""
    },
    {
      "line": 7,
      "value": "# Entao Exibe a expessao \"Ovo de Páscoa\" no titulo da guia"
    }
  ],
  "line": 13,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33336483700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Consultar Ovo de Páscoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-páscoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Exibe a expessao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 16246157900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 4300382300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 18
    }
  ],
  "location": "Post.exibeAExpessaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 6025035900,
  "status": "passed"
});
formatter.after({
  "duration": 1307616800,
  "status": "passed"
});
});