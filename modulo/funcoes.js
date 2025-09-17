/******************************************************************************************
 * Objetivo: Arquivo responsável pelas funções para criar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Julio Cesar Santana Alves
 * Versão: 1.0
*******************************************************************************************/
// Importe de arquivo estados_cidades
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = {status : false, statuscode: 500, development:'Julio Cesar'}

// Retorna a lista de estados 
const getAllEstados = function(){
    // Padrão do JSON que será o retorno da função 
    let message = {status:true, statuscode:200, development: 'Julio Cesar', uf:[]}

    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })
    // Adiciona um novo elemento no JSON
    message.quantidade = message.uf.length

    // Apaga um elemento existente no JSON
    // delete message.status
    if (message.uf.length > 0)
      return message // Resultado verdadeiro da API 200
    else
        return MESSAGE_ERROR //Resultado Falso da API 500
}

// Retorna dados do estado filtrando pela sigla
const getEstadoBySigla = function(uf){
    let message = {status:true, statuscode:200, development: 'Julio Cesar', uf: '', descricao:"", capital:"", regiao:""}

    dados.listaDeEstados.estados.forEach(item=>{
        if (item.sigla === uf) {
            message.uf = item.sigla
            message.descricao = item.nome
            message.capital = item.capital
            message.regiao = item.regiao
        }
    })
    if(uf === message.uf)
        return message
    else return MESSAGE_ERROR

}

// Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(uf){
    let message = {status:true, statuscode:200, development: 'Julio Cesar', uf: "", descricao:"", capital:""}

    dados.listaDeEstados.estados.forEach(item =>{
        if(item.sigla === uf){
            message.uf = item.sigla
            message.descricao = item.nome
            message.capital = item.capital
        }
    })
    if (uf === message.uf) {
        return message
    }else return MESSAGE_ERROR
}

// Retorna a lista de estados filtrando pela regiao
const getEstadoByRegiao = function(regiao){
    let message = {status:true, statuscode:200, development: 'Julio Cesar', regiao: "", estados:[], uf:"", descricao:""}

    dados.listaDeEstados.estados.forEach(item =>{
        if (item.regiao === regiao) {
            message.regiao = item.regiao
            message.estados.push(item.estados)
        }
        
    })
    if (regiao === message.regiao) {
        return message
    }
}

// Retorna a lista de estados que formam a capital de um pais filtrando pelo pais
const getEstadoIsCapitalByCountry = function(pais){

}

// Retorna as cidades existente em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla){

}


module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}

console.log(getEstadoByRegiao('Norte'))
