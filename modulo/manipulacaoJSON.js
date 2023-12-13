/**********************************************************************
 * Objetivo: Atividade criar um sistema sobre os estados do Brasil
 * Data: 18/10/2023
 * Autor: Pietra
 * Versão: 1.0
 *********************************************************************/

var estadosC = require ('./estado');

const getListaDeEstados = function(){
    let arrayLocal = []
    let jsonEstados = {}
    let status = false;
    
    estadosC.estadosCidades.estados.forEach(estado =>{
        arrayLocal.push(estado.sigla)
        status = true;
    });

    jsonEstados.uf = arrayLocal
    jsonEstados.qunt = arrayLocal.length

    if (status)
     return jsonEstados;
    else
     return false; 

}
 const getDadosEstado = function(sigla){
    let lista = {}
    let status = false
    
 
    
    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
        if(sigla == estadosC.estadosCidades.estados[contador].sigla){
            lista.uf = estadosC.estadosCidades.estados[contador].sigla
            lista.descricao = estadosC.estadosCidades.estados[contador].nome
            lista.capital = estadosC.estadosCidades.estados[contador].capital
            lista.regiao = estadosC.estadosCidades.estados[contador].regiao
            status = true
        }
    }

    if (status)
     return lista
    else
     return false
   
}
const getCapitalEstado = function(sigla){
    let lista = {}
    let status = false;
    
    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
        if(sigla == estadosC.estadosCidades.estados[contador].sigla){
            lista.uf = estadosC.estadosCidades.estados[contador].sigla
            lista.descricao = estadosC.estadosCidades.estados[contador].nome
            lista.capital = estadosC.estadosCidades.estados[contador].capital
            status = true;
            
        }
    }
    if (erro)
    return lista;
   else
    return false;
    
}
const getEstadosRegiao = function(regiao){
    let estadosRegiao = {}
    let estados = []
    let status = false;


        
        for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
            let info = {}
            if (regiao == estadosC.estadosCidades.estados[contador].regiao){
            info.uf = estadosC.estadosCidades.estados[contador].sigla
            info.descricao = estadosC.estadosCidades.estados[contador].nome
            estados.push(info)
        estadosRegiao.regiao = estadosC.estadosCidades.estados[contador].regiao
        estadosRegiao.estados = estados
        status = true;
        }
    }
    if (status)
    return estadosRegiao;
   else
    return false;
        
}

const getCapitalPais = function (){
    let listaCapitais = {}
    let capitais = []
    let status = false;
    
 
    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
     
     if( estadosC.estadosCidades.estados[contador].capital_pais){
      let info = {}
       info.capital_atual = estadosC.estadosCidades.estados[contador].capital_pais.capital
       info.uf = estadosC.estadosCidades.estados[contador].sigla
       info.descricao = estadosC.estadosCidades.estados[contador].nome
       info.capital = estadosC.estadosCidades.estados[contador].capital
       info.regiao = estadosC.estadosCidades.estados[contador].regiao
       info.capital_pais_ano_inicio = estadosC.estadosCidades.estados[contador].capital_pais.ano_inicio
       info.capital_pais_ano_termino = estadosC.estadosCidades.estados[contador].capital_pais.ano_fim
         capitais.push(info)
     listaCapitais.capitais = capitais
     status = true;
      
     }
 }
 if (status)
 return listaCapitais;
else
 return false;
 }

 const getCidades = function(siglas){
    let listaCidades = {}
    let nomeCidades = []
    let status = false;

    for(let contador=0;contador<estadosC.estadosCidades.estados.length;contador++){
        if (siglas == estadosC.estadosCidades.estados[contador].sigla)  {
            for(let contador2=0;contador2<estadosC.estadosCidades.estados[contador].cidades.length;contador2++){
                nomeCidades.push(estadosC.estadosCidades.estados[contador].cidades[contador2].nome)
            }
            listaCidades.uf = estadosC.estadosCidades.estados[contador].sigla
            listaCidades.descricao = estadosC.estadosCidades.estados[contador].nome
            listaCidades.quantidade_cidades = nomeCidades.length
            listaCidades.cidades = nomeCidades
            status = true;
        }
    }
    if (status)
    return listaCidades;
   else
    return false;
        
 }

module.exports = {
    getListaDeEstados,
    getCapitalEstado,
    getCapitalPais,
    getCidades,
    getDadosEstado,
    getEstadosRegiao
}