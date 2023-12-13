/*************************************************************************
 * Objetivo: Criação de uma API para manipular dados do Estados e Cidades
 * Data: 01/11/2023
 * Autor: Pietra Volpato
 * Versão: 1.0
 *************************************************************************/

// Para criar uma API podemos utilizar o EXPRESS
/* 
 npm install express --save
   E a biblioteca que vai gerenciar as requicicoes da API 

 npm install body-parser --save
   e a biblioteca que vai manipular dados do corpo da requisicao (POST, PUT)

 npm install cors --save
  E a biblioteca responsavel pelas permissoes (HEADER) de acesso das requisicoes

*/

//Import das bibliotecas para criar a API
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {request} = require('http');
const {access} = require('fs')

//Criando um objeto app para manipular as requicicoes da API
const app = express();


//request - recebe alguns dados
//response - saida (return) de dados da API

//Função para manipular as funções da API
app.use((request, response, next) =>{

    //Permite especificar quem poderá acessar a API
    response.header('Access-Control-Allow-Origin', '*');

    //Permite especificar como a API, sera requisitada (GET, POST, PUT e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET');

    //Ativa as configurações de permissão no cors
    app.use(cors());

    next();
})

//EndPoints: Lista as siglas de todos os estados
app.get('/estados/sigla', cors(), async function(request, response, next){


    let controleEstadosCidades = require('./modulo/manipulacaoJSON.js');
    let listaEstados = controleEstadosCidades.getListaDeEstados();

    if (listaEstados){
      response.json(listaEstados);
      response.status(200);
    }else{
      response.status(404)
    } 
})

//EndPoints: Retorna dados do Estado filtrando a sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){

  //recebe uma variavel encaminhada como parametro na requisição
  let siglaEstado = request.params.uf;

  let controleDadosEstado = require('./modulo/manipulacaoJSON.js');
  let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado);
  console.log (dadosEstado);

  if(dadosEstado){
    response.json(dadosEstado);
    response.status(200);
  }else{
    response.status(404);
    response.json({erro: 'Item não encontrado'})
  }

})

//EndPoints: Retorna dados da Capital filtrando pela sigla do Estado
app.get('/capital/estado', cors(), async function(request, response, next){

  //recebe uma variavel encaminhada como query string na requisição
  // EX: /capital/estado?uf=SP
  let siglaEstado = request.query.uf;

  let controleDadosCapital = require('./modulo/manipulacaoJSON.js');
  let dadosEstado = controleDadosCapital.getCapitalEstado(siglaEstado);


  if(dadosEstado){
    response.json(dadosEstado);
    response.status(200);
  }else{
    response.status(404);
    response.json({erro: 'Item não encontrado'})
  }

})

//EndPoints: Retorna dados da Capital filtrando pela sigla do Estado
app.get('/regiao/estado', cors(), async function(request, response, next){

  //recebe uma variavel encaminhada como query string na requisição
  // EX: /capital/estado?uf=SP
  let regiaoEstado = request.query.regiao;

  let controleDadosRegiao = require('./modulo/manipulacaoJSON.js');
  let dadosEstado = controleDadosRegiao.getEstadosRegiao(regiaoEstado);

  if(dadosEstado){
    response.json(dadosEstado);
    response.status(200);
  }else{
    response.status(404);
    response.json({erro: 'Item não encontrado'})
  }

})

//EndPoints: Retorna dados da Capital filtrando pela sigla do Estado
app.get('/capital/pais/estado', cors(), async function(request, response, next){

  //recebe uma variavel encaminhada como query string na requisição
  // EX: /capital/estado?uf=SP
  let CapitalPais = request.query.uf;

  let controleDadosCapitalPais = require('./modulo/manipulacaoJSON.js');
  let dadosEstado = controleDadosCapitalPais.getCapitalPais(CapitalPais);

  if(dadosEstado){
    response.json(dadosEstado);
    response.status(200);
  }else{
    response.status(404);
    response.json({erro: 'Item não encontrado'})
  }

})

app.get('/estado/cidades', cors(), async function(request, response, next){


  let siglaEstado = request.query.uf;

  let controleDadosCidades = require('./modulo/manipulacaoJSON.js');
  let dadosCidades = controleDadosCidades.getCidades(siglaEstado)

  if(dadosCidades){
    response.json(dadosCidades)
    response.status(200)
  }else{
    response.status(404)
    response.json({erro: 'Item não encontrado'})
  }
})



app.listen('8080', function(){
    console.log('API funcionando!!')

})